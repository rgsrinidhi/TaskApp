import { GoogleGenAI, Type} from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "You are productivity assistant, help this person break down the following task into 5-7 subtasks in words to add into a todo list '"+prompt+"'",
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            givenTask: {
              type: Type.STRING,
            },
            subTasks:{
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
          },
          propertyOrdering: ["givenTask", "subTasks"],
        },
      }
    }
  });
  return response.text;
}

const getSubTask = async(request,res)=>{
    console.log(request.body.originalTask)
    
    const response = await main(request.body.originalTask)
    const parsed = JSON.parse(response);    
    res.json(parsed)
}

export {getSubTask}
