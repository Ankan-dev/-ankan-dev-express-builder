import dotenv from 'dotenv';
dotenv.config();
import path from "path";
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../src/views"));

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


export default app;

