import { test } from "@playwright/test";
import axios from "axios";
import { expect } from "chai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://reqres.in/api";
const tokenFile = path.join(__dirname, "../test-data/token.js");

const saveToken = (token) => {
  fs.writeFileSync(tokenFile, `export const token = '${token}';\n`, "utf8");
};

test.describe("Reqres Login API Tests", () => {
  test("Successful login - saves token", async () => {
    const response = await axios.post(`${BASE_URL}/login`, {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });

    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("token").that.is.a("string").and.not
      .empty;
    expect(response.headers).to.have.property(
      "content-type",
      "application/json; charset=utf-8"
    );

    saveToken(response.data.token);
  });
});
