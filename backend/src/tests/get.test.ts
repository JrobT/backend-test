import "dotenv/config";
import supertest from "supertest";
import { prisma, app } from "../app";

prisma.toDo.findMany = jest.fn().mockReturnValueOnce([
  {
    id: 1,
    title: "something good",
    completed: false,
  },
  {
    id: 2,
    title: "number 2",
    completed: true,
  },
  {
    id: 3,
    title: "./?;45$£``",
    completed: false,
  },
]);

describe("get ToDos", () => {
  it("gets a list of ToDos", async () => {
    return supertest(app)
      .get("/todo")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toMatchObject([
          {
            id: 1,
            title: "something good",
            completed: false,
          },
          {
            id: 2,
            title: "number 2",
            completed: true,
          },
          {
            id: 3,
            title: "./?;45$£``",
            completed: false,
          },
        ]);
      });
  });
});
