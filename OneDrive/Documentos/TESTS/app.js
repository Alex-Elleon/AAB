import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { error } from "console";
import {test} from "./Backend/controllers/alumno.contoller.js";

dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("funciona la base de datos")
})
.catch((error)=>{
    console.log("No funciona ya salio", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el sevidor")
})

test()
