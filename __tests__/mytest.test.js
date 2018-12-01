const request = require("supertest");
const app = require("../server/app.js");

const room = {
  name: 1,
  ratings: 2,
  accuracy: 3,
  communication: 3,
  cleanliness: 2,
  location: 4,
  check_in: 3,
  value: 2
};

describe("API", () => {
  describe("GET /api/rooms/:listingId/reviews", () => {
    test("should respond with status code 200", () =>
      request(app)
        .get("/api/rooms/1/reviews")
        .expect(200));

    test("should respond with an array of reviews", () =>
      request(app)
        .get("/api/rooms/1/reviews")
        .expect(200)
        .expect(res => {
          expect(res.body.results).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                room_id: expect.anything(),
                description: expect.anything(),
                verified: expect.anything(),
                photo_url: expect.anything()
              })
            ])
          );
        }));

    test("should respond with correct values", () =>
      request(app)
        .get("/api/rooms/1/reviews")
        .expect(200)
        .expect(res => {
          const item = res.body.results[0];
          expect(item.room_id).toEqual(expect.any(Number));
          expect(item.room_id).toBeGreaterThanOrEqual(0);
          expect(item.room_id).toBeLessThanOrEqual(100);
          expect(item.description).toEqual(expect.any(String));
          expect(item.verified).toEqual(expect.any(Boolean));
          expect(item.photo_url).toEqual(expect.any(String));
        }));

    test("should respond with a 404 for invalid id", () =>
      request(app)
        .get("/api/rooms/-1/reviews")
        .expect(404));
  });

  describe("POST /api/rooms/:id/reviews", () => {
    test("should respond with status code 201", () =>
      request(app)
        .post("/api/rooms/1/reviews")
        .send(photo)
        .expect(201));
  });

  describe("PUT /api/rooms/:id/reviews", () => {
    test("should respond with status code 200", () =>
      request(app)
        .put("/api/rooms/1/reviews")
        .expect(200));

    test("should respond with a 404 for invalid id", () =>
      request(app)
        .put("/api/rooms/MYSQL/reviews")
        .expect(404));
  });

  describe("DELETE /api/rooms/:id/reviews", () => {
    test("should respond with status code 200", () =>
      request(app)
        .delete("/api/rooms/1/reviews")
        .expect(200));

    test("should respond with a 404 for invalid id", () =>
      request(app)
        .delete("/api/rooms/NOTSQL/reviews")
        .expect(404));
  });
});
