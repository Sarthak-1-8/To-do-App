import { Schema, model} from 'mongoose'

const usersShemea= Schema({
    name:String,
    username:String,
    password:String,

})


const Users= new model("Users",usersShemea);

export const createUser= async (details)=>{
    try{
        const newUser= new Users(details);
        await newUser.save();
        console.log(`${details.name} is now registered with us`)
    }
    catch(err){
        console.error(`Could not save ${details.name} in the database`);
        throw err;
    }

}