import { verifyJWT, signJWT } from "../services/jwt.js";


//Middlewares for verifying authenticity of user

export const checkJWT = async (req, res, next)=>{
    const { authorization :token } = req.headers;
    try{
        await verifyJWT(token); 
        next();
    }
    catch(err){
        res.status(401).json({
            msg:"Failed to verify authenticity of user",
            Error:err
        });
    }
}

export const generateJWT= async (req, res, next)=>{
    const {username, type} = req.body()
    try{
        const token = await signJWT({username,type});
        localStorage.setItem("authorization",token)
        localStorage.setItem("username",username)
        next();
    }
    catch(err){

        res.status(401).json({
            msg:"Fsiled to Generate JWT",
            error: err
        });
    }        
}

