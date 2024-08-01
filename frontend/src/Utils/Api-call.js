import axios from "axios"
const baseUrl = "http://localhost:8000/api/v1"

export const getCategoriesApi = async (data) => {
    try {
        const res = await axios.get(`${baseUrl}/category`)
        console.log("new_category_api", res.data )
        return res.data
    } catch (error) {
        return error.message.data
    }
}

export const categoriesApi = async (data) => {
    try {
        const res = await axios.get(`${baseUrl}/category`)
        console.log("new_category_api", res.data )
        return res.data
    } catch (error) {
        return error.message.data
    }
}