const users = require('../models/UserModel')
const jwt = require('jsonwebtoken')

exports.registerController= async(req,res)=>{
    console.log('inside register controller');
    const {Name,EmailAddress,Password,Phonenumber} = req.body
    
    try {
        const existingUser = await users.findOne({EmailAddress})
        if(existingUser){
            res.status(406).json("existing user please login..")
        }else{
            const newUser = new users({
                Name,EmailAddress,Password,Phonenumber
            })
            await newUser.save()
            res.status(200).json(newUser)

        }
        
    } catch (error) {
        res.status(401).json(error)
    }
    
    
}


exports.loginController = async(req,res)=>{
    const {EmailAddress,Password} = req.body

    try {
        const existingUser = await users.findOne({EmailAddress})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.superSecretKey)
            res.status(200).json({
                user:existingUser,
                token
            })
        }else{
            res.status(404).json('Incorrect password/ email')
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getllAllregister= async(req,res)=>{
   
    
    try {
      const result = await users.find({}, { Password: 0 })
      res.status(200).json(result)
      
        
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.userDetails = async(req,res)=>{
    const userId = req.userId
    try {
        const result = await users.findOne({_id:userId},{Password:0})
        res.status(200).json(result)
    } catch (error) {
        res.status(401).json(error)
    }
}