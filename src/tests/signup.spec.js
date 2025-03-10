import { test } from "@playwright/test";
import { expect } from "chai";
import SignupPage from "../po/pages/signup.page";
import { invalidEmail } from "./test-data/credentials";

test.skip(false, "Skipping signup tests for now");
test.use({ storageState: "emptyStorageState.json" });

test.describe("Test suite for sign-up functionality", () => {
  let signupPage;
  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
  });
  test("User signs up with invalid email", async () => {
    await signupPage.open("https://www.capcut.com/signup");
    await signupPage.enterWrongEmail(invalidEmail);
    expect(await signupPage.isErrorMessageVisible()).to.be.true;
  });
});
