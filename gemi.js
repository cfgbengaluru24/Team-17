const express = require("express");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");


// Replace with your actual API key
const API_KEY = "";

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // Middleware to parse JSON bodies


const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateContent(prompt) {
    try {
        const result = await model.generateContent([prompt]);
        console.log('Generated Content:', result.response.text());
        console.log(JSON.parse(result.response.text()));
        return JSON.parse(result.response.text());

    } catch (error) {
        console.error("Error generating content:", error);
    }
}




module.exports = {
    generateContent,
}