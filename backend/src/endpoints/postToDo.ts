import { PrismaClient } from "@prisma/client";
import StatusCode from "../constants/statusCodes";
import ToDo from "../types/todo";

const postToDo = async (request: any, response: any, prisma: PrismaClient) => {
  const { title, completed }: ToDo = request.body;
  const todos = await prisma.toDo.create({ data: { title, completed } });
  response.status(StatusCode.CREATED).json(todos);
};

export default postToDo;
