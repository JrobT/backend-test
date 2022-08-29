import "dotenv/config";
import supertest from "supertest";
import { prisma, app } from "../app";

prisma.toDo.update = jest.fn().mockReturnValueOnce([
  {
    id: 1,
    title: "this is a new one - but better",
    completed: true,
  },
]);

describe("put ToDo", () => {
  it("put a ToDo", async () => {
    return supertest(app)
      .put("/todo/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toMatchObject([
          {
            id: 1,
            title: "this is a new one - but better",
            completed: true,
          },
        ]);
      });
  });
});
