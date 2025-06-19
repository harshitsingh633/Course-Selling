
import { Router } from 'express';
import userMiddleware from '../middlewares/user.js';
import { courseModel, purchaseModel, userModel } from '../db.js';

const courseRouter = Router();

    courseRouter.post('/purchase', userMiddleware ,async(req ,res) => {
        const {userId , courseId} = req.body;

        // should check that the user has actually paid the price
        await purchaseModel.create({
            userId,
            courseId
        })
        res.json({
            message : "You have successfully bought the course"
        })
    })
    
    courseRouter.get('/preview', async(req , res) => {
        const courses = await courseModel.find({});
        res.json({
            courses
        })
    })


export default courseRouter;