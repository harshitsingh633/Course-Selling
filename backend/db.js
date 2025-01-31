import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import z from "zod";

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

export const userModel = mongoose.model('user', userSchema);
export const adminModel = mongoose.model('admin', adminSchema);
export const courseModel = mongoose.model('course', courseSchema);
export const purchaseModel = mongoose.model('purchase', purchaseSchema);



