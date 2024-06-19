import express from 'express'
import { createUser } from '../models/users-model.js'
import { generateJWT } from '../middleware/jwt-Middleware.js';

const router = express.Router();




router.post("/signup",generateJWT,async (req,res,next)=>{
    const details= req.body;
    try{
        await createUser(details);
        res.status(200).json({
            msg:`${details.name} is now registered with us`
        })
    }
    catch(err){
        next(err);

    }
})