const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({//to get image to upload
    destination: function (req, file, cb) {
        cb(null, './uploads/categories')
        
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})