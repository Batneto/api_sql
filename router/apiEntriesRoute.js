const express=require('express')

const router=express.Router()

const {getEntries,getAllEntries,deleteEntries,createEntries,updateAuth}=require('../controllers/apiEntriesController')


router.get('/',getEntries)
router.get('/all',getAllEntries)
router.post('/',createEntries)
router.put('/actualizar',updateAuth)
router.delete('/:title',deleteEntries)




module.exports=router