import express from 'express';
import { safeCreateTask,safeUpdateTask } from '../middleware/validator-Middleware.js';  //ZOD
import { createToDo } from '../models/to-do-model.js';                                  //Mongoose, MongoDB

 const router= express.Router();
 
 //Middleware
 

 
//Routes

router.get("/All-task",(req, res)=>{
    console.log("route....")
    res.status(200).json({
        msg:'Fine'
    });
});

router.post("/create-task",safeCreateTask,async (req,res)=>{
    const task = req.body;
    try{
        await createToDo(task);
        res.status(200).json({
            msg:"Task-Added"
        })
        console.log("TaskCreated")
    }
    catch(err){
        console.error("Failed to Create new task",err)
        res.status(401).json({
            msg:"Failed to Create new task ",
            error:err
        })

    }


});

router.put("/update-task",safeUpdateTask,(req,res)=>{

});

router.put("/completed",safeUpdateTask,(req,res)=>{

});





export default router;