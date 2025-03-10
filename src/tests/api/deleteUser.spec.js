import { test } from "@playwright/test";
import axios from "axios";
import { expect } from "chai";

const BASE_URL = "https://reqres.in/api";

test.describe("Reqres DELETE API Tests", () => {
  test("DELETE single user by ID", async () => {
    const id = 2;
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    expect(response.status).to.equal(204);
    expect(response.data).to.be.empty;
  });
});
