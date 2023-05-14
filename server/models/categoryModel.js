const mongoose = require('mongoose')
const { Schema } = mongoose

const catagorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
    },
    catDesc: {
        type: String,
        required: false
    },
    catImg: {
        type: String,
        required: false
    },
})

const catModel = mongoose.model("category", catagorySchema)

module.exports = catModel