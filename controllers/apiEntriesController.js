
const {getEntriesByEmail,getAllEntriesModel,postNewEntriesModel,updateEntriesModel,deleteEntriesModel}=require('../models/entries')

const getEntries=async(req,res)=>{

    let data;

    try {  

        let email =req.body.email

        if(email){

        data=await getEntriesByEmail(email)

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
const getAllEntries=async(req,res)=>{

    let data;

    try {  

        data=await getAllEntriesModel()

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


const createEntries=async(req,res)=>{

    let data;

    let title=req.body.title
    let content =req.body.content
    let id =req.body.id
    let category =req.body.category
    

    try {  

        data= await postNewEntriesModel(title,content,id,category)
        
        res.status(200).json({
            ok:true,
            data
        })


    } catch (error) {
        res.status(500).json({
        ok:false,
        msg:'conecta con el administrador '
    })
    }

}
const updateAuth=async(req,res)=>{

    let data;

    let id=req.body.id_entry
    let title=req.body.title
    let content =req.body.content
    let id_author =req.body.id_author
    let category =req.body.category
    

    try {  

        data= await updateEntriesModel(id,title,content,id_author,category)
        
        res.status(200).json({
            ok:true,
            data
        })


    } catch (error) {
        res.status(500).json({
        ok:false,
        msg:'consulta con el administrador '
    })
    }
    
}
const deleteEntries=async(req,res)=>{

    let deleteEntrieModel = req.params.id; 

    try {
        await deleteEntriesModel(deleteEntrie);

        res.status(200).json({
            ok: true,
            msg: 'Entrada eliminada',
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error al borrar la entrada'
        });
    }
}

module.exports={
    getEntries,
    getAllEntries,
    createEntries,
    updateAuth,
    deleteEntries
    
}