import mongoose, {Schema, model} from "mongoose";

const toDoSchema= new Schema({
    tittle:String,
    description: String,
    completed:Boolean
})

const ToDos = new model("ToDo",toDoSchema );

export const createToDo = async (task)=>{
    try{
        const newToDo =  new ToDos(task)
        await newToDo.save();
        console.log(`${task.tittle} saved`)
    }
    catch(err){
        console.error("Could not save task", err);
        throw err;
    }
}