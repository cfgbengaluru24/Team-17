const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
connectDB();

//import routes
const auth = require('./routes/authRoute');

//app config
const app = express();


//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


//use routes
app.use('/api/auth', auth);
//listen


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});







