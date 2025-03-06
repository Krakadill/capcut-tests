import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("testing AI tools functionality", () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test("user tries text to speech feature", async () => {
    test.setTimeout(60000);
    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    const textToSpeechBtn = await homePage.openTextToSpeech();
    expect(await textToSpeechBtn.isVisible()).to.be.true;
  });
});
