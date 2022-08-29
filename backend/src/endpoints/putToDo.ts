import { PrismaClient } from "@prisma/client";
import StatusCode from "../constants/statusCodes";
import ToDo from "../types/todo";

const putToDo = async (request: any, response: any, prisma: PrismaClient) => {
  const id = parseInt(request.params.id);
  const { title, completed }: ToDo = request.body;
  const todos = await prisma.toDo.update({
    where: { id },
    data: { title, completed },
  });
  response.status(StatusCode.OK).json(todos);
};

export default putToDo;
