import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";
import { homePageUrl } from "./test-data/commonUrl";

test.describe("Test suite for video creation and editing feature", () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test("User opens video editor", async () => {
    await homePage.open(homePageUrl);
    const { videoEditorPage, redirectUrl } = await homePage.openVideoEditor();
    expect(redirectUrl).to.include("work_space&start_tab");
  });
});
