import express from "express";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import contactRouter from "./routes/contact.js";

const contactApp = express();
contactApp.use(express.json()); 
dbConnection();

contactApp.use(contactRouter);



contactApp.listen(1000, ()=>{
    console.log('contactApp is listening on port 1000');
});

