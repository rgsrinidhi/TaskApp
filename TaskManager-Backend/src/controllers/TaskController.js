import OpenAI from "openai";


const getAllTasks = async(request,res)=>{
    await main()    
    res.json({message:"got all tasks"})
}


export {getAllTasks}