import express from "express";
import dotenv from 'dotenv';
import route from "./routes/contact.Route.js";
import cors from 'cors';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/contact", route);
const port = process.env.SERVER_PORT || 3100;

app.listen(port, () => {
    console.log('Servidor Online!');
});
