const mongoose = require('mongoose');
const user = require('../models/user');


 const createUSer = async (req,res)=>{

    console.log('Req.body===>',req.body)
    const { name,mobile,email} = req.body;

    const createUserResult = await user.createUser({...req.body})

    if(createUserResult.success){
        return res.status(200).json(createUserResult);
    }
    else{
        return res.status(500)
    }
}

exports.getAllUsers = async (req,res)=>{

    const allUsersresponse = await user.getAllUsers()

    if(allUsersresponse.success){
        return res.status(200).json(allUsersresponse);
    } else {
        return res.status(404).json({ success: false, message: "No users found" });
    }
};

exports.getUserByName = async (req,res)=>{
    const {name} = req.query;
    const response = await user.getUserByName(name)

    if(response.success){
        return res.status(200).json(response);
    } else {
        return res.status(404).json({ success: false, message: "No users found" });
    }
}

 const deleteByName = async (req,res)=>{
    const {name} = req.query;

    const deletedUserResponse = await user.deleteUserByName(name);
    if(deletedUserResponse.success){
        return res.status(200).json(deletedUserResponse);
    } else {
        return res.status(404).json({ success: false, message: "No users found" });
    }
}

module.exports = {createUSer,}