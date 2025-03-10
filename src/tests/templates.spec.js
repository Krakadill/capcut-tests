import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for templates feature", () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test("User navigates to search-bar for templates", async () => {
    test.setTimeout(60000);
    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    const templateSearchInput = await homePage.searchTemplates();
    expect(await templateSearchInput.isVisible()).to.be.true;
  });
});
