import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import apiConfig from "./config/api.config";
import {
  deleteToDo,
  getToDos,
  postToDo,
  putToDo,
} from "./endpoints";

const prisma = new PrismaClient();
const app = express();

app.use(
  cors({
    origin: apiConfig.FRONTEND_URL,
  })
);
app.use(bodyParser.json());

app.get("/todo", async (_request, response) => getToDos(response, prisma));
app.post("/todo", async (request, response) =>
  postToDo(request, response, prisma)
);
app.put("/todo/:id", async (request, response) =>
  putToDo(request, response, prisma)
);
app.delete("/todo/:id", async (request, response) =>
  deleteToDo(request, response, prisma)
);

export { prisma, app };
