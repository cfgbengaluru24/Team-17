const express = require('express');
const path = require('path');
const { generateContent } = require("./gemi");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle the transcribed text
app.get('/generate', async (req, res) => {
    const text = req.query.text;
    console.log(text);
    const result = await generateContent(text +"Generate a JSON string that can be directly converted into a JSON object using JSON.parse(). The JSON should contain a detailed report including patient name, age, gender, disease description, symptoms, diagnosis, prescription, general advice for the patient, the number of months until the next review, and the expected recovery time. Output only the JSON string without any spaces or newlines. don't give dummy text take whatever given as input " );

    // Preprocess the result to get the actual JSON
    // Send the JSON response to the frontend
    // console.log(result);
    console.log(result);
    res.json(result);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

