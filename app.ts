import AppConfiguration from "./src/config/AppConfiguration";
import dotenv from "dotenv";
import express from "express";
import getTopicRoute from "./src/route/getTopicRoute";

dotenv.config();
const app = express();
const port = AppConfiguration().server.port;

app.listen(port, () => {
    console.log(`Discussion Topic API is running on port ${port}.`);
});

app.get('/topic', getTopicRoute);


