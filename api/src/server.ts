import express from "express";
import dotenv from 'dotenv';
import route from "./routes/contact.Route.js";
import cors from 'cors';
import handleError from "./middleware/error.js";
dotenv.config();

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/contact", route);
app.use(handleError);

app.listen(port, () => {
    console.log('Servidor Online!');
});
