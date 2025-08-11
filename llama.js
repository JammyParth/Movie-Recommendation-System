import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const HF_API_URL = "https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf";
const HF_API_KEY = process.env.HF_API_KEY;

export async function chatWithLlama(prompt) {
    const response = await fetch(HF_API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            inputs: prompt,
        }),
    });

    const data = await response.json();
    return data;
}

// Example usage
chatWithLlama("Hello, how are you?")
    .then(console.log)
    .catch(console.error);
