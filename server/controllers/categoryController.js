const categoryServices = require('../services/categoryServices')
const upload = require('../middleware/categoryUpload')

exports.create = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            next(err)
        }
        else {
            const path = req.file != undefined ? req.path.replace(/\\/g, "/") : ""

            var model = {
                categoryName: req.body.categoryName,
                catDesc: req.body.catDesc,
                catImg: path != "" ? "/" + path : ""

            }
            categoryServices.createCatagory(model, (error, results) => {
                if (error) {
                    return next(error)
                }
                else {
                    return res.status(200).send({

                    })
                }
            })


        }
    })
}

exports.findAll = (req, res, next) => {
    var model = {
        categoryName: req.query.categoryName,
        pageSize: req.query.pageSize,
        page: req.query.page
        
    }
    categoryServices.getCatagory(model, (error, results) => {
        if (error) {
            return next(error)
        }
        else {
            return res.status(200).send({

            })
        }
    })

}

exports.findOne = (req, res, next) => {
    var model = {
        categoryId: req.params.id,
   
        
    }
    categoryServices.getCatagoryById(model, (error, results) => {
        if (error) {
            return next(error)
        }
        else {
            return res.status(200).send({

            })
        }
    })

}

exports.update = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            next(err)
        }
        else {
            const path = req.file != undefined ? req.path.replace(/\\/g, "/") : ""

            var model = {
                categoryId:req.params.id,
                categoryName: req.body.categoryName,
                catDesc: req.body.catDesc,
                catImg: path != "" ? "/" + path : ""

            }
            categoryServices.updateCatagory(model, (error, results) => {
                if (error) {
                    return next(error)
                }
                else {
                    return res.status(200).send({

                    })
                }
            })


        }
    })
}
exports.delete = (req, res, next) => {
    var model = {
        categoryId: req.params.id,
   
        
    }
    categoryServices.deleteCatagory(model, (error, results) => {
        if (error) {
            return next(error)
        }
        else {
            return res.status(200).send({

            })
        }
    })

}