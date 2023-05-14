const catCon = require('../controllers/categoryController')
const router = require('express').Router()

router.post('/cat', catCon.create)
router.get('/cat', catCon.findAll)
router.get('/cat', catCon.findOne)
router.put('/cat', catCon.update)
router.delete('/cat', catCon.delete)

module.exports = router