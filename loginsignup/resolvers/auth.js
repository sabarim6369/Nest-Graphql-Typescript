const User=require("../models/user")
const bcrypt = require("bcryptjs"); 
const login=async(_,{email,password,role})=>{
    console.log("login")

    try{
       const user=await User.findOne({email});
       if(!user){
        return {message:"user not exists.signup first",status:404,success:false,user:null}
       }
       const isValid=await bcrypt.compare(password,user.password);
       if(!isValid){
        return {message:"invalid password",status:400,success:false,user:null}
       }
       return {message:"login successfull",status:200,success:true,user:user}
    }
    catch(error){
        console.log(error);
        return {message:"server error",status:500,success:false,user:null}
    }
}
    const signup=async(_,{email,password,name,age,role})=>{
        console.log("signup",role)

        try{
            const user=await User.findOne({email});
            if(user){
                return {message:"user already exists",status:400,success:false,user:null}
            }
            const hashedPassword=await bcrypt.hash(password,10);
            const newUser=new User({email,password:hashedPassword,name,age,role});
            await newUser.save();
            return {message:"signup successfull",status:200,success:true,user:newUser}

        }
        catch(error){
            console.log(error);
            return {message:"server error",status:500,success:false,user:null}
        }
    }
module.exports={login,signup}