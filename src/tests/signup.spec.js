import { test } from "@playwright/test";
import { expect } from "chai";
import SignupPage from "../po/pages/signup.page";

test.skip(false, "Skipping signup tests for now");

test.use({ storageState: "emptyStorageState.json" });

test.describe("Test suite for sign-up functionality", () => {
  test("User should get error message for entering invalid Email", async ({
    page,
  }) => {
    const signupPage = new SignupPage(page);

    await signupPage.open("https://www.capcut.com/signup");
    await signupPage.emailInput.click();
    await signupPage.enterEmail("Wrong credential");
    await signupPage.clickContinue();

    const errMsgText = await signupPage.getErrorMessage();
    expect(errMsgText).to.equal("Enter a valid email address");
  });
});
