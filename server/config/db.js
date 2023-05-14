const mongoose = require('mongoose')
const express = require('express')
const app = express()
const {Mongo_config} = require('../config/app.config');



mongoose.Promise = global.Promise

mongoose.connect(Mongo_config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(
    () => {
        console.log("DB Connected")
    },
    (error) => {
        console.log("Could'nt connect", error)
    }
)
module.exports = mongoose