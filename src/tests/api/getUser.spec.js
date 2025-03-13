import { test } from "@playwright/test";
import axios from "axios";
import { expect } from "chai";

const BASE_URL = "https://reqres.in/api";

test.describe("Reqres Get API Tests", () => {
  test("Getting single user by ID", async () => {
    const id = 2;
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    expect(response.status).to.equal(200);
    expect(response.data.data.id).to.equal(id);
    expect(response.headers).to.have.property(
      "content-type",
      "application/json; charset=utf-8"
    );
  });
});
