import express from "express";
import dotenv from "dotenv";
import StudentRoute from "./routes/student.routes.js";
import TeacherRoute from "./routes/teacher.routes.js";
import DBCONNECT from "./dbconnections.js";

dotenv.config();


const app = express();
app.use('/student', StudentRoute)
app.use('/teacher', TeacherRoute)

// home page
app.get("/" , (req, res) => {
    res.json({
        message: "You're Welcome to my student API",
        author:"Ethel"
    })
})


 const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    DBCONNECT();
    console.log(`App listening to ${PORT}!`);
})