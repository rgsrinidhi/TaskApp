import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    originalTask:{type:String,required:true},
    subTask:{type:String,required:false},
    status:{type:String,enum:['to-do','in-progress','completed'],default:'to-do',required:true},
    dateTime:{type:Date,required:false},
},{timestamps:true})

export const Task =  mongoose.model('tasks',taskSchema);
