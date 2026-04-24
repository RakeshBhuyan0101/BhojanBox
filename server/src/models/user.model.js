import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name  :{type : String , required : true ,  minLength : 5 , maxLength : 40} ,
    email  :{type : String , required : true , minLength : 6 , select : false , trim : true},
    password  :{type : String , required : true , match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]},
    role : {type : String , enum: ["customer" , "owner"] , default: "customer"}
} , {timestamps : true});

const User = mongoose.model("User" , UserSchema);

export default User;