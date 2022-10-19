const express = require('express')
const router =express.Router()
const Table =require('../controllers/TableController/TableController')

router
    .route('/table')
    .get(Table.getAllTable)
    .post(Table.AddTable)
    





module.exports = router