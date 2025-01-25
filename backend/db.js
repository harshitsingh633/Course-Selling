import * as dotenv from 'dotenv';
dotenv.config();
import mongoose, { model } from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error.message);
});

const Schema =  mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id : ObjectId,
    email : { type : String , unique: true},
    password : String,
    firstName : String,
    lastName : String,

})

const adminSchema = new Schema({
    id : ObjectId,
    email : String,
    password : String,
    firstName : String,
    lastName : String
})

const courseSchema = new Schema({
    id : ObjectId,
    title : String,
    description : String,
    imageUrl : String,
    price : Number,
    creatorId : ObjectId
})

const purchaseSchema = new Schema({
    id : ObjectId,
    userId : ObjectId,
    courseId : ObjectId
})

const userModel = mongoose.model('userModel', userSchema);
const adminModel = mongoose.model('adminModel', adminSchema);
const courseModel = mongoose.model('courseModel', courseSchema);
const purchaseModel = mongoose.model('purchaseModel', purchaseSchema);

export default { userModel, adminModel, courseModel, purchaseModel };
