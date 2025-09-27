import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.SERVER_PORT || 3100;


app.listen(port, () => {
    console.log('Servidor Online!');
});
