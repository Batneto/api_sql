const express=require('express')
const router=require('./router/apiEntriesRoute')

const app=express()

const port=process.env.PORT || 3000; //process.env.PORT

// Body-parser middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static(__dirname+'/public'))



//* RUTAS

app.use('/api/entries',router)
app.use('/api/authors',require('./router/apiAuthorsRouter'))


app.listen(port,()=>{
    console.log('servidor a la escucha del puerto 3000 ');
})