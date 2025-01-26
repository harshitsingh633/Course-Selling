import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";


const Schema =  mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new Schema({
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

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

export default { userModel, adminModel, courseModel, purchaseModel };
