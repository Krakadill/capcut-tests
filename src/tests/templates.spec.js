import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for templates feature", () => {
  test("User navigates to search-bar for templates", async ({ page }) => {
    test.setTimeout(60000);
    const homePage = new HomePage(page);

    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await homePage.aside.templates.click();

    const templateSearchInput = await page.locator(".lv-template__search__bg");
    expect(await templateSearchInput.isVisible()).to.be.true;
  });
});
