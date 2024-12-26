const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return Hello, world!", (done) => {
    request(app).get("/").expect(200, "Hello, World!", done);
  });
});

describe("POST /user", () => {
  it("should create a user with valid test", (done) => {
    request(app)
      .post("/user")
      .send({ name: "Coder29" })
      .expect(201, "User Coder29 created", done);
  });

  it("should return 400 if name is missing", (done) => {
    request(app).post("/user").send({}).expect(400, "Name is required", done);
  });
});
