import mongoose, {Schema, model} from "mongoose";



const toDoSchema= new Schema({
    tittle:String,
    description: String
})

export const toDos = new model("ToDo",toDoSchema );