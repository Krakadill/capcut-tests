import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("testing AI tools functionality", () => {
  test("user tries text to speech feature", async ({ page }) => {
    test.setTimeout(60000);

    const homePage = new HomePage(page);

    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await homePage.aside.magicTools.click();

    const textToSpeechBtn = await page
      .getByText("Text to speech", { exact: true })
      .nth(1);
    expect(await textToSpeechBtn.isVisible()).to.be.true;
  });
});
