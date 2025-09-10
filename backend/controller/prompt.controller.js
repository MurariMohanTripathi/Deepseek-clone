import OpenAI from "openai";
import { Prompt } from "../model/prompt.model.js";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.OPENAI_API_KEY
});
// console.log(openai.apiKey);
export const sendPrompt = async(req,res) =>{
    const {content} = req.body;
    const userId = req.userId;

    if(!content ||content.trim()===""){
        return res.status(400).json({errors:"Prompt content is required"});
    }
    try {
        //save user prompt
        const userPrompt = await Prompt.create({
            userId,
            role:"user",
            content
        })

        //send to openAI
        const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: content }],
        model: "deepseek-chat",
        });
        const aiContent = completion.choices[0].message.content;
         //save assistant prompt
        const aiMessage = await Prompt.create({
            userId,
            role:"assistant",
            content:aiContent
        })
        return res.status(200).json({reply:aiContent})
    } catch (error) {
        console.log("Error in Prompt : ",error);
        return res.status(500).json({error:"Something went wrong with the ai response"});        
    }
};