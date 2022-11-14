const express = require('express')
const router =express.Router()
const Table =require('../controllers/TableController/TableController')

router
    .route('/table')
    .get(Table.getAllTable)
    .post(Table.AddTable)


router
    .route('/Billing/:id')
    .patch(Table.TableBilling)    
    .get(Table.getTableBilling)





module.exports = router