import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";
import { homePageUrl } from "./test-data/commonUrl";

test.describe("Test suite for Image editing feature", () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test("User opens image editor", async () => {
    await homePage.open(homePageUrl);
    const { imageEditorPage, redirectUrl } = await homePage.openImageEditor();
    expect(redirectUrl).to.include("editor-graphic");
  });
});
