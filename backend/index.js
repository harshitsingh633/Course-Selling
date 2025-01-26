import express from 'express';
import userRouter from './routes/user.js';
import courseRouter from './routes/course.js';
import adminRouter from './routes/admin.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course",courseRouter);
app.use('/api/v1/admin',adminRouter);


function main(){
    mongoose.connect(process.env.MONGO_URI, {
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error.message);
    });
    const port = 3000;
app.listen(port, () => {
    console.log(`Port is Running on ${port}`);
})
}
main()