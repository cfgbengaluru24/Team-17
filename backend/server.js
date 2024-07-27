const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
connectDB();

//import routes
const auth = require("./routes/authRoute");
const camp = require("./routes/campRoute");
const beneficiary = require("./routes/beneficiaryRoute");
//app config
const app = express();

app.use(express.static("dist"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//use routes
app.use("/api/auth", auth);
app.use("/api/camp", camp);
app.use("/api/beneficiary", beneficiary);
//listen

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
