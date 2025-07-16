import {Task} from '../models/task.model.js'
import { TaskDao  } from '../daos/task.dao.js'

const getAllTasks = async(request,res)=>{    
    res.json({message:"got all tasks"})
}

const createTask =async(request,res)=>{    
    const newTask = new Task({
        originalTask:request.body.originalTask,
        subTask:request.body.subTask,
        status:request.body.status,
        dateTime:request.body.dateTime
    })
    try{
        await TaskDao.create(newTask)
        res.status(200).json({message:"Task inserted"})
    }
    catch(error){
        res.status(500).json({ error: 'DB crashed' });
    }
   
}


export {getAllTasks,createTask} 