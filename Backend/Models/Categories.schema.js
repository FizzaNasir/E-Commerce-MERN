const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    // _id: {
    //     type: String
    // },
    name: {
        type: String,
        required: true
    },
    parentCategory: {
        type: mongoose.Schema.ObjectId,
        ref: "CategoryModel"
    },
    createdAt : {
        type: Date,
        default: Date.now()
    },
    updatedAt : {
        type: Date,
        default: Date.now()
    }
})

const Category = mongoose.model('CategoryModel', CategorySchema)  //This name mentioned here is then transformed to collection name in mongodb
module.exports = Category
