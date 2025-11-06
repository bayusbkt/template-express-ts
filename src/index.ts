import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ENV } from "./config/env";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.get("/", (req: Request, res: Response) => {
    res.send("OK!");
});

app.listen(ENV.PORT, () => {
    console.log(`🚀 Server up and running on http://localhost:${ENV.PORT}`)
});