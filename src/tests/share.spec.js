import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for file and media sharing feature", () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test("User clicks on share button to choose share option", async () => {
    test.setTimeout(60000);
    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    const shareWindow = await homePage.openShareWindow();
    expect(await shareWindow.isVisible()).to.be.true;
  });
});
