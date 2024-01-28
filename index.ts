//const express = require('express' )
import express, { Express, Application, Request, Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./src/docs/swagger.json";
import db from "./prisma/db";

const app: Application = express();

app.use(cors());
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const cooperative = await db.cooperative.findMany();
  res.json(cooperative);
});

app.get("/name", (req: Request, res: Response) => {
  res.send("Anarana : judi");
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
