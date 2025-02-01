import { Router } from "express";
import {adminModel, courseModel} from '../db.js';
import jwt from 'jsonwebtoken';
import adminMiddleware from "../middlewares/admin.js";
import * as dotenv from 'dotenv';
import { z } from "zod";
import bcrypt from "bcrypt"
dotenv.config();
const JWT_Admin_Password = `${process.env.JWT_Admin_Password}`;
const adminRouter = Router();

    adminRouter.post('/signup', async(req , res)=>{
        //Check that the password has 1 uppercase Character , 1 lowercase Character, 1 special character
        try{
            const requireBody = z.object({
                email : z.string().min(3).max(100).email(),
                firstName : z.string().min(3).max(100),
                lastName : z.string().min(3).max(100),
                password : z.string().min(3).max(30)
            })
            const parseDatawithSuccess = requireBody.safeParse(req.body);

            if(!parseDatawithSuccess.success){
                return res.status(400).json({
                    message : "Incorrect format",
                    error : parseDatawithSuccess.error
                })
            }
       const { email, password, firstName, lastName } = parseDatawithSuccess.data;//Todo adding zod validation
               //Todo : hash the password so plaintext pw is not stored in DB
                const hashedPassword = await bcrypt.hash(password , 10);
                   await adminModel.create({
                   email: email,
                   password : hashedPassword,
                   firstName : firstName,
                   lastName : lastName,
               })
        res.json({
            message: "signup successfull"
        })}
        catch(e){
            res.status(500).json({
                message:"Error while signing up",
                error: e.message
            })
        }
    })

    adminRouter.post('/signin', async(req , res) => {
       const { email, password} = req.body;
       
               //TODO : ideally password should be hashed, and hence you can't compare the user provided password and the database password 
       
               const admin = await adminModel.findOne({
                   email : email,
                   //next step use the bycript library
               })
               const passwordMatch = bcrypt.compare(password , admin.password)
               if(admin && passwordMatch){
                   const token = jwt.sign({
                       id : admin._id.toString()
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