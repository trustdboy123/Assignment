import { UserSchema } from "../model/user.js";

//create Student
const createUser = async(req,res)=> {
    try {
        const newUser = await UserSchema.create({...res.body})

        return res.status(201).json({
            status: true,
            message: 'User has been created',
            data: newUser
        })
        
    } catch (error) {
        console.log('Something Went Wrong!', error)
        
    }
}
//get all users
const getAllUsers = async(req,res)=>{
    try {
        const users = await UserSchema.find({});

        return res.status(200).json({
            status: true,
            message: 'Users fetch successfully',
            body: users
        })
        
    } catch (error) {
        comsole.log('Something Went Wrong', error)
    }
}
export {getAllUsers, 
        createUser}