
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import userModel from '../db.js';
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
    userRouter.get('/purchases', (req , res) => {
        res.json({
            message: "signup endpoint"
        })
    })

    export default userRouter;
