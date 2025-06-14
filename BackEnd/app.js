import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env")
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/model/shortUrl.Model.js";
import short_url from "./src/routes/shortUrl.routes.js";
import { redirectFromShortUrl } from "./src/controllers/shortUrl.controller.js"

import {errorHandler} from "./src/utils/errorHandler.js";
import cors from "cors";

const app = express();
app.use(cors());


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/create", short_url);


app.get('/:id', redirectFromShortUrl);


app.use(errorHandler)


app.listen(5000, () => {
    connectDB();
    console.log("Server is running on port http://localhost:5000");
})


//Get- Redirect