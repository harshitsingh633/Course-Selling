
import { Router } from 'express';
import courseModel from '../db.js';

const courseRouter = Router();

    courseRouter.post('/purchase',(req ,res) => {
        res.json({
            message : "Harkirat singh"
        })
    })
    
    courseRouter.get('/preview', (req , res) => {
        res.json({
            message : "Harkirat singh"
        })
    })


export default courseRouter;