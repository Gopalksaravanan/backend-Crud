const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    mobile:{type:String, required:true},
    email:{type:String, required:true}
},
{ collection: 'users' }
)

let User = (module.exports = mongoose.model('User', userSchema));

module.exports.createUser = async (userData)=>{
    try{
        const user = await User.create(userData);
        if(user)
            return {
            data:user,
            success:true,
            message:"Created successfully"
        }
    }catch(error){
        return {data:{},success:false,message:error.message}
    }
}

module.exports.getAllUsers = async()=>{

    try{
        const users = await User.find();

        if (users) {
            return { data: users, success: true, message: "Users Fetched Successfully." }
        }
    } catch(error){
            return {data :{},success:false,message:error.message}
    }
}

module.exports.getUserByName = async (name)=>{

    try{
        const user = await User.find({name});

        if (user){
            return {data:user,success:true,message:'User Fetched Successfully'}
        }
    } catch (error){
        return {data :{},success:false,message:error.message}
    }
}

module.exports.deleteUserByName = async (name)=>{
    try{
        const user = await User.findOneAndDelete({name});
        if (user){
            return{data:user,success:true,message:'Deleted Successfully'}
        }
    }catch(error){
        return {data:{},success:false,message:error}
    }
}