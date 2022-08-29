import { PrismaClient } from "@prisma/client";
import StatusCode from "../constants/statusCodes";

const deleteToDo = async (
  request: any,
  response: any,
  prisma: PrismaClient
) => {
  const id = parseInt(request.params.id);
  const todos = await prisma.toDo.delete({ where: { id } });
  response.status(StatusCode.OK).json(todos);
};

export default deleteToDo;
