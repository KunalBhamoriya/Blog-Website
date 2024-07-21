const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

//const getAllUsers = () => {};


//register callback
const registerController = async (req,res) => {
    try{
        const {username, email , password} = req.body();
        // validation
        if(!username || !email || !password){
            return res.status(400).send({
                success: false,
                message: "plase fill all feilds",
            });
        }

        // check for existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).send({
                success : false,
                message: "User already exists",
            });
        }

        //hashing password
        const hashedPassword = await bcrypt.hash(password, 10);

        //save new user
        const newUser = new userModel({username, email, password:hashedPassword});
        await user.save();
        return res.status(201).send({
            success:true,
            message: "registration Success",
            user,
        });

        
    } catch(error){
        console.log(error);
        return res.status(500).send({
            message: "error in registration",
            success : false,
            error,
        });
    }
};

//login callback
const loginController = async (req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.send(401).send({
                success: false,
                message: "fill all fields",
            });
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(401).send({
                success: false,
                message: "user is not registerd",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).send({
                success: false,
                message: "incorrect password",
                user,
            });
        }

        return res.status(201).send({
            success: true,
            message: "login Succesful",
            user,
        });

    } catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "error in login",
            error,
        });
    }
};

module.exports = {loginController, registerController};