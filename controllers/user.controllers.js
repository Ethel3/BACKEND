import express from "express";
import UserSchema from "../models/user.models.js";

// login user
export const Login = async (req, res, next)=>{ 
    const { username } = req.body;

    try{
    const user = await UserSchema.findOne({ username, isdeleted: false})
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Incorrect Username or password"
        })
    }
   
} catch (error){
    next(error)
  }
};

// add user
export const addUser = async (req, res, next)=>{
    try{
        const { fullname, username, email} = req.body;
        if (!fullname || !username || !email || !req.body.password){
        res.status(400)
        next(CreateError("Please fill all fields", 400))   
        }
    
        //Existing user
        const userExists = await UserSchema.findOne({ email })
        if (userExists) {
            res.status(409)// this should not work
            next(CreateError("User already exists", 400))
        }
      } catch (error){
        next(error)
      }
    }
    