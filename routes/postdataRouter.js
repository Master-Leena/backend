import express from 'express';
import { postData } from '../commentRouter.js';

 export const postdataRouter = express.Router();


postdataRouter.get('/',(req, res)=>{
res.status(200).send({status: 200, message: "Success", posting: postData})
})


postdataRouter.get('/:id',(req, res)=>{

res.status(200).send({status: 200, message: "id successfully get", data:[]})
})