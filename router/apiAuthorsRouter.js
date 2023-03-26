const express=require('express')

const router=express.Router()

const {getAuthByEmail,getAuthors,postNewAuth,deleteAuthors,updateAuth}=require('../controllers/apiauthorsController')


router.get('/',getAuthByEmail)
router.get('/all',getAuthors)
router.post('/nuevo',postNewAuth)
router.put('/actualizar',updateAuth)
router.delete('/delete',deleteAuthors)   //todo cuando se cambia a params la url debera contener el :id,title o lo que sea 



module.exports=router