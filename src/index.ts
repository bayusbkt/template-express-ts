import express, { Application, Request, Response } from "express";
import { ENV } from "./config/env";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("OK!");
});

app.listen(ENV.PORT, () => {
    console.log(`🚀 Server up and running on http://localhost:${ENV.PORT}`)
});