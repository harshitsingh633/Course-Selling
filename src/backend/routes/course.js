
import { Router } from 'express';

let courseRouter = Router();

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