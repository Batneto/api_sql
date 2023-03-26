
const {getAuthByEmailModel,getAllAuth,postNewAuthModel,deleteAuthModel,updateAuthModel}=require("../models/author")


const getAuthByEmail=async(req,res)=>{

    let data;

    try {  
        let email =req.body.email

        if(email){

        data=await getAuthByEmailModel(email)
        res.status(200).json({
            ok:true,
            data
        })
    }else{
       // data=await getAllEntries()
    }
   

    } catch (error) {
        res.status(500).json({
        ok:false,
        msg:'error al obtener las entradas'
    })
    }
    
}


const getAuthors=async(req,res)=>{

    let data;

    try {  

        data= await getAllAuth()
        
        res.status(200).json({
            ok:true,
            data
        })


    } catch (error) {
        res.status(500).json({
        ok:false,
        msg:'error al obtener las entradas'
    })
    }
    
}



const postNewAuth=async(req,res)=>{

    let data;
    let name =req.body.name
    let surname =req.body.surname
    let email =req.body.email
    let image =req.body.image

    try {  

        data= await postNewAuthModel(name,surname,email,image)

        res.status(200).json({
            ok:true,
            data
        })


    } catch (error) {
        res.status(500).json({
        ok:false,
        msg:'error al crear el author'
    })
    }
    
}

const deleteAuthors=async(req,res)=>{

    let data;

    let id=req.body.id
    
    

    try {  

        data= await deleteAuthModel(id)
        
        res.status(200).json({
            ok:true,
            data
        })


    } catch (error) {
        res.status(500).json({
        ok:false,
        msg:'error al borrar el autor'
    })
    }
    
}
const updateAuth=async(req,res)=>{

    let data;

    let id=req.body.id
    let name =req.body.name
    let surname =req.body.surname
    let email =req.body.email
    let image =req.body.image
    

    try {  

        data= await updateAuthModel(id,name,surname,email,image)
        
        res.status(200).json({
            ok:true,
            data
        })


    } catch (error) {
        res.status(500).json({
        ok:false,
        msg:'error al actualizar el autor '
    })
    }
    
}






module.exports={
    getAuthByEmail,
    getAuthors,
    postNewAuth,
    deleteAuthors,
    updateAuth
    
}