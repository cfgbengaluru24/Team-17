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
    const result = await generateContent(text + "send the string of json without any spaces and /n's and will able to conver tthat string .json function in next step" + `{
        "report": {
          "patient_symptoms": {
            "anemia": [
              "Fatigue",
              "Pale skin",
              "Shortness of breath"
            ],
            "organ_disease": [
              "Specific symptoms related to the organ affected"
            ]
          },
          "diagnosis": {
            "anemia": "Iron-deficiency anemia based on blood tests showing low hemoglobin levels.",
            "organ_disease": "Diagnosis of organ disease based on imaging and laboratory results."
          },
          "treatment_plan": {
            "anemia": [
              "Iron supplements",
              "Dietary changes including iron-rich foods"
            ],
            "organ_disease": [
              "Specific treatments based on the organ affected",
              "Possible surgery or specialized therapies"
            ]
          },
          "medication_details": {
            "anemia": [
              {
                "medication": "Ferrous sulfate",
                "dosage": "325 mg",
                "frequency": "Twice daily",
                "instructions": "Take with food to reduce gastrointestinal discomfort."
              }
            ],
            "organ_disease": [
              {
                "medication": "Medication specific to the organ disease",
                "dosage": "Dosage details",
                "frequency": "Frequency details",
                "instructions": "Any special instructions"
              }
            ]
          },
          "follow_up_instructions": [
            "Follow-up appointment in 1 weeks",
            "Additional tests to monitor progress",
            "Lifestyle and dietary recommendations"
          ],
          "doctor_notes": "Patient is responding well to the treatment for anemia. Organ disease treatment will be monitored closely with follow-up tests."
        }
      }
      
      {
        "prompt": "Generate a detailed medical report where a doctor is diagnosing and treating a patient with anemia and an organ disease. The report should include the following details:\n\n1. **Patient Symptoms**: Describe the symptoms presented by the patient related to anemia and the specific organ disease. Include symptoms such as fatigue, pale skin, shortness of breath for anemia, and specific symptoms for the organ disease.\n\n2. **Diagnosis**: Provide a diagnosis for both anemia and the organ disease based on the patient’s symptoms and any relevant test results. Include any tests or procedures that were performed to arrive at the diagnosis.\n\n3. **Treatment Plan**: Outline the treatment plan for anemia and the organ disease. Include both immediate treatments and long-term management strategies.\n\n4. **Medication Details**: List the medications prescribed for treating anemia and the organ disease. Include dosages, frequency, and any special instructions for each medication.\n\n5. **Follow-up Instructions**: Provide follow-up instructions for the patient. Include any recommended lifestyle changes, additional tests, or future appointments.\n\n6. **Doctor’s Notes**: Include any additional notes from the doctor regarding the patient's condition, progress, and any other relevant information.\n\nThe report should be formatted as JSON and include all the above details in a structured and comprehensive manner."
      }
       only give json data nothing else needed`);

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