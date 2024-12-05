import express from 'express';
import dotenv from 'dotenv';
import { postData } from './commentRouter.js';
import { postdataRouter } from './routes/postdataRouter.js';

const app  = express();
dotenv.config();


app.use('/postman', postdataRouter)



app.get('/',(req, res)=>{
res.status(200).send('Wellcome to backend startup new jurney happy life')
})





// app.get('/posting',(req, res)=>{
// res.status(200).send({status: 200, message: "post data success", data: postData})
// })

// app.get('/product/:id',(req, res)=>{
// const id = req.params.id;
// res.status(200).send(` id successfully get ===  ${id}`)
// })


// app.get('*',(req, res)=>{
//     res.status(404).send("page not found")
// })


const PORT = process.env.PORT
app.listen(PORT,()=>{
console.log(`Server is started on port ${PORT}`)
})
