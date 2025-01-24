
import { Router } from 'express';

const userRouter = Router();

    userRouter.post('/signup', (req , res)=>{
        const email = req.body.email;
        const password = req.body.password;
        res.json({
            message: "signup endpoint"
        })
    })
    
    userRouter.post('/signin', (req , res) => {
        res.json({
            message: "signup endpoint"
        })
    })
    userRouter.get('/purchases', (req , res) => {
        res.json({
            message: "signup endpoint"
        })
    })

    export default userRouter;
