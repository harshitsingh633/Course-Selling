import { Router, Router } from "express";

const adminRouter = Router();

    adminRouter.post('/signup', (req , res)=>{
        const email = req.body.email;
        const password = req.body.password;
        res.json({
            message: "signup endpoint"
        })
    })

    adminRouter.post('/signin', (req , res) => {
        res.json({
            message: "signup endpoint"
        })
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