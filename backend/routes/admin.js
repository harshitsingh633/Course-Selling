import { Router } from "express";
import {adminModel} from '../db.js';
import jwt from 'jsonwebtoken';
const JWT_Admin_Password = `${process.env.JWT_Admin_Password}`;
const adminRouter = Router();

    adminRouter.post('/signup', async(req , res)=>{
       const { email, password, firstName, lastName } = req.body;//Todo adding zod validation
               //Todo : hash the password so plaintext pw is not stored in DB
             
                   await adminModel.create({
                   email: email,
                   password : password,
                   firstName : firstName,
                   lastName : lastName,
               })
        res.json({
            message: "signup successfull"
        })
    })

    adminRouter.post('/signin', async(req , res) => {
       const { email, password} = req.body;
       
               //TODO : ideally password should be hashed, and hence you can't compare the user provided password and the database password 
       
               const admin = await adminModel.findOne({
                   email : email,
                   password : password //next step use the bycript library
               })
               if(admin){
                   const token = jwt.sign({
                       id : admin._id
                   },JWT_Admin_Password)
                   
                   //Do Cookie based logic
                   res.json({
                       token : token
                   })
               }
               else{
                   res.status(403).json({
                       message: "Incorrect Credentials"
                   })
               }
               
    })

    adminRouter.post('/course', (req , res) => {
        res.json({
            message : "Created a new Course"
        })
    })
    adminRouter.put('/course' , (req ,res) => {
        res.json({
            message: "Course"
        })
    })
    adminRouter.get('/course/bulk',(req , res) => { 
        res.json({
            message:"Harkirat Cohort 3"
        })
    })

    export default adminRouter;