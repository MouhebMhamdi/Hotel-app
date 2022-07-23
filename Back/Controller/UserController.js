const User =require('../Model/User');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
exports.signin = async(req,res) => {
    await User.findOne({
        email : req.body.email            
    }).exec((error,user)=>{
        if(error) return res.status(400).json({ error });
        if(user){
            user.authenticate(req.body.password).then(data=>{
                if(data){
                    const user1={name:user.email,role:user.role}
                    const token =jwt.sign(user1,process.env.JWT_SECRET,{expiresIn: "24h"});
                    res.json({User:user,AccessToken: token})
                }else{
                    
                    return res.status(405).json({message:"Error login !"})
                }
            })
        }  else{
            res.status(402).json({error: "erreur !"});
        }
    })
}

exports.signup = async(req,res) => {
    await User.findOne({
        email : req.body.email            
    }).exec((error,user)=>{
        if(user){
            es.status(502).json({error: "User exist !"});
        }else{
            req.body.role="USER";
            req.body.Password=req.body.password;
            const _user=new User(req.body);
            _user.save((error,User)=>{
                if(error) return res.status(400).json({ error });
                const user1={name:User.email,role:User.role}
                const token =jwt.sign(user1,process.env.JWT_SECRET,{expiresIn: "24h"});
                res.json({User:User,AccessToken: token})
            })

        }
    })
}