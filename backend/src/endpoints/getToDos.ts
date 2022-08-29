import { PrismaClient } from "@prisma/client";
import StatusCode from "../constants/statusCodes";

const getToDos = async (response: any, prisma: PrismaClient) => {
  const todos = await prisma.toDo.findMany({
    orderBy: [
      {
        title: "asc",
      },
    ],
  });
  response.status(StatusCode.OK).json(todos);
};

export default getToDos;
