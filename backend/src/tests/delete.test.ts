import "dotenv/config";
import supertest from "supertest";
import { prisma, app } from "../app";

prisma.toDo.delete = jest.fn().mockReturnValueOnce([]);

describe("delete ToDo", () => {
  it("delete a ToDo", async () => {
    return supertest(app)
      .delete("/todo/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toMatchObject([]);
      });
  });
});
