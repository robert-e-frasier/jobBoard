import express from "express";
import cors from "cors";
import AuthRoute from "./routes/AuthRoute.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", AuthRoute)

app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        service: "jobBoard backend",
    });
});