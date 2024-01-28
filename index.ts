//const express = require('express' )
import express, { Express, Application, Request, Response } from "express";
const app: Application = express();
import { PrismaClient } from "@prisma/client";
import cors from "cors";

app.use(cors());
const port = 3001;

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

app.get("/", async (req: Request, res: Response) => {
  const cooperative = await prisma.cooperative.findMany();
  res.json(cooperative);
});

app.get("/name", (req: Request, res: Response) => {
  res.send("Anarana : judi");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
