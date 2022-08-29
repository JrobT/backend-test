import "dotenv/config";
import supertest from "supertest";
import { prisma, app } from "../app";

prisma.toDo.create = jest.fn().mockReturnValueOnce([
  {
    id: 1,
    title: "this is a new one",
    completed: false,
  },
]);

describe("post ToDo", () => {
  it("post a new ToDo", async () => {
    return supertest(app)
      .post("/todo")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject([
          {
            id: 1,
            title: "this is a new one",
            completed: false,
          },
        ]);
      });
  });
});
