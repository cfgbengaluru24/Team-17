const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;

//import routes

//app config
const app = express();


//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


//use routes

//listen


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});







