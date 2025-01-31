import { Router } from "express";
import {adminModel, courseModel} from '../db.js';
import jwt from 'jsonwebtoken';
import adminMiddleware from "../middlewares/admin.js";
import * as dotenv from 'dotenv';
dotenv.config();
const JWT_Admin_Password = `${process.env.JWT_Admin_Password}`;
const adminRouter = Router();

    adminRouter.post('/signup', async(req , res)=>{
        try{
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
        })}
        catch(e){
            res.status(500).json({
                message:"Error while signing up"
            })
        }
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

    adminRouter.post('/course',adminMiddleware,async (req , res) => {
        const adminId = req.adminId;
        const {title , description , imageUrl, price, courseId} = req.body;
        
        const course = await courseModel.create({
            title: title,
            description: description,
            imageUrl : imageUrl,
            price : price,
            creatorId : adminId
        })
        
        res.json({
            message : "Course Created",
            courseId : course._id
        })
    })
    adminRouter.put('/course' , adminMiddleware,async(req ,res) => {
        const adminId = req.adminId;
        const {title , description , imageUrl, price ,courseId} = req.body;
        
        const course = await courseModel.updateOne({
            _id: courseId,
            creatorId : adminId
        },
        {
            title: title,
            description: description,
            imageUrl : imageUrl,
            price : price
    })
        
        res.json({
            message : "Course updated",
            courseId : course._id
        })
    })
    adminRouter.get('/course/bulk',adminMiddleware, async(req , res) => { 
        const courses = await courseModel.find({
            creatorId : adminId
        });
        res.json({
            message:"Harkirat Cohort 3",
            courses
        })
    })

    export default adminRouter;