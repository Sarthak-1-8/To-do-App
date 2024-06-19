import jwt from  'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config();

const secretKey= process.env.SECRET_KEY;

export const signJWT = (payload)=>{
    return new Promise((resolve,reject)=>{
        try{
            const token =jwt.sign(payload, secretKey,{expiresIn:"2h"});
            resolve(token);
        }
        catch(err){
            reject(err)
        }

    });

    
}


export const verifyJWT = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token,secretKey,(err,decode)=>{
            if (err){
                console.error("Signup again : ", err.message);
                reject(err)
            }
            else{
                resolve(decode)
            }
        })

    }); 
    
}