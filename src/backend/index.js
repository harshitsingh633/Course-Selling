import express from 'express';
import userRouter from './routes/user.js';
import courseRouter from './routes/course.js';
import adminRouter from './routes/admin.js';
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course",courseRouter);
app.use('/api/v1/admin',adminRouter);






const port = 3000;
app.listen(port, () => {
    console.log(`Port is Running on ${port}`);
})