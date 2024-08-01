const express = require("express")
const mongoose = require('mongoose')

const CategoryModel = require("../Models/Categories.schema")
const router = express.Router()

router.post("/", async (req, res)=>{
    try {
        const category = req.body
        const newCategory = await CategoryModel.create(category)
        return res.json(newCategory)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get("/:categoryId?", async (req, res)=>{
    try {
        const categoryId = req.params.categoryId

        const categoryTree = await CategoryModel.aggregate([
             {
                $match: {
                  parentCategory: { $exists: false }
                }
              },
              {
                $lookup: {
                  from: "categorymodels",
                  localField: "_id",
                  foreignField: "parentCategory",
                  as: "subcategories"
                }
              },
              {
                $unwind: {
                  path: "$subcategories",
                  preserveNullAndEmptyArrays: true
                }
              },
              {
                $lookup: { // Nested lookup for subcategories' subcategories (grandchildren)
                  from: "categorymodels",
                  localField: "subcategories._id",
                  foreignField: "parentCategory",
                  as: "subcategories.subcategories" // Nest the results within the subcategories field
                }
              },
              {
                $group: {
                  _id: "$_id",
                  name: { $first: "$name" },
                  createdAt: { $first: "$createdAt" },
                  updatedAt: { $first: "$updatedAt" },
                  __v: { $first: "$__v" },
                  subcategories: {
                    $push: {
                      _id: "$subcategories._id",
                      name: "$subcategories.name",
                      parentCategory: "$subcategories.parentCategory",
                      createdAt: "$subcategories.createdAt",
                      updatedAt: "$subcategories.updatedAt",
                      __v: "$subcategories.__v",
                      subcategories: "$subcategories.subcategories"
                    }
                  }
                }
              }
          ]);
    
          return res.json(categoryTree);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router