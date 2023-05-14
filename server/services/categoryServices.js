const { response } = require('express')
const catagory = require('../models/categoryModel')
const { Mongo_config } = require('../config/app.config')

async function createCatagory(params, callback) {
    if(!params.categoryName){
        return callback({
            message: "Category Name is Required"
        }, "")
    }

    const model = new catagory(params) //creates a new cat model to be saved params contain name desc and image
    model.save()// saves it to db
            .then((response) => {
                return callback(null, response)
            })
            .catch((error) => {
                return callback(error)
            })
}

async function getCatagory(params, callback) {
    const catname = params.categoryName
    var condition = categoryName ?{
        categoryName: {$regex: new RegExp(catname), $options: "i"},
    }:{}    

    let perPage = Math.abs(params.pageSize) || Mongo_config.PAGE_SIZE
    let page = (Math.abs(params.page) || 1) - 1;

    catagory.find(condition, "categoryName categoryImage")
    .limit(perPage)
    .skip(perPage * page)
    .then((response) => {
        return callback(null, response)
    })
    .catch((error) => {
        return callback(error)
    })

}    

async function getCatagoryById(params, callback) {
    const catid = params.categoryId
    

    catagory.findById(catid)
    .then((response) => {
        if(!response) callback("No Category with Id:" + catid)
        else callback(null, response)
    })
    .catch((error) => {
        return callback(error)
    })

}    

async function updateCatagory(params, callback) {
    const catid = params.categoryId
    

    catagory.findByIdAndUpdate(catid, params, {useFIndAndModify: false})
    .then((response) => {
        if(!response) callback("No Category with Id:" + catid)
        else callback(null, response)
    })
    .catch((error) => {
        return callback(error)
    })

}    


async function deleteCatagory(params, callback) {
    const catid = params.categoryId
    

    catagory.findByIdAndDelete(catid)
    .then((response) => {
        if(!response) callback("No Category with Id:" + catid)
        else callback(null, response)
    })
    .catch((error) => {
        return callback(error)
    })

}   