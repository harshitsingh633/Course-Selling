import * as dotenv from 'dotenv';
dotenv.config();
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import  { purchaseModel, userModel }  from '../db.js';
import userMiddleware from '../middlewares/user.js';
const JWT_User_Password = `${process.env.JWT_User_Password}`;


const userRouter = Router();

    userRouter.post('/signup',async (req , res)=>{
        const { email, password, firstName, lastName } = req.body;//Todo adding zod validation
        //Todo : hash the password so plaintext pw is not stored in DB
      
            await userModel.create({
            email: email,
            password : password,
            firstName : firstName,
            lastName : lastName,
        })
            res.json({
            message: "Signup Succeded"
         })
    })
    
    userRouter.post('/signin', async (req , res) => {
        const { email, password} = req.body;

        //TODO : ideally password should be hashed, and hence you can't compare the user provided password and the database password 

        const user = await userModel.findOne({
            email : email,
            password : password //next step use the bycript library
        })
        if(user){
            const token = jwt.sign({
                id : user._id
            },JWT_User_Password)
            
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
    userRouter.get('/purchases',userMiddleware, async(req , res) => {
        
        const userId = req.body.userId;

        const purchases = await purchaseModel.find({
            userId,
        })

        let purchasedCourseIds = [];

        for (let i = 0; i < purachases.length; i++) {
            purchasedCourseIds.push(purchases[i].courseId)
            
        }

        const coursesData = await courseModel.find({
            _id : { $in : purchasedCourseIds }
        })
        res.json({
            purchases,
            coursesData
        })
    })

    export default userRouter;
