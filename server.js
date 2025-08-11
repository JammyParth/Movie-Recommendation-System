// server.js

const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Add to .env: GEMINI_API_KEY=your_key_here

app.use(express.static("public"));

app.get("/recommend", async (req, res) => {
    try {
        const userInput = req.query.input;

        // Send request to Google Gemini API (flash model)
        const geminiResponse = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            { text: `You are helpful in recommending movies.\n${userInput}\nList out all movies.` }
                        ]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: 60000 // 1 minute
            }
        );

        // Gemini response structure
        const modelOutput =
            geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response from Gemini.";

        res.send(modelOutput);

    } catch (error) {
        console.error("Gemini API Error:", error.response?.data || error.message || error);
        res.status(500).send("An error occurred while processing your request.");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
