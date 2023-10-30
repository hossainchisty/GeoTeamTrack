import express from 'express';
import bodyParser from 'body-parser';
import { applicationRoutes } from "./app/routes/routes";

const app = express();

app.use(bodyParser.json());

// Application Route
app.use("/api/v1/", applicationRoutes);

export default app;
