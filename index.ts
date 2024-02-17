import cors from "cors";
import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import db from "./prisma/db";
import swaggerOutput from "./src/docs/swagger.json";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (false) {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

app.get("/", async (req: Request, res: Response) => {
  const cooperative = await db.cooperative.findMany();
  res.json(cooperative);
});

app.get("/name", (req: Request, res: Response) => {
  res.send("Anarana : judi");
});

app.get("/test", (req: Request, res: Response) => {
  res.json({
    message: "OK",
  });
});

app.post("/test", async (req: Request, res: Response) => {
  const body = req.body;
  /* #swagger.parameters["body"] = {
    in: "body",
    description: "User data.",
    required: true,
    schema: {
      username: "user",
      password: "1234",
    },
  }; */
  console.log(body);
  res.json({
    // message: "OK",
    body,
  });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
