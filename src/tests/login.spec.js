import { test } from "@playwright/test";
import { expect } from "chai";
import LoginPage from "../po/pages/login.page";

test.skip(true, "Skipping signup tests for now");

test.use({ storageState: "emptyStorageState.json" });

test.describe("Test suite for login feature", () => {
  test("User logs-in with valid credentials", async ({ page }) => {
    test.setTimeout(60000);

    const loginPage = new LoginPage(page);
    const email = "orvelatester@gmail.com";
    const password = "orvela123!!!";

    await loginPage.open("https://www.capcut.com/login");
    await loginPage.login(email, password);
    await loginPage.waitForLoginSuccess();

    const userHomePageUrl = await page.url();
    expect(userHomePageUrl).to.include("start_tab=video");
  });
});
