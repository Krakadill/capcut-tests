import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for file and media sharing feature", () => {
  test("User clicks on share button to choose share option", async ({
    page,
  }) => {
    test.setTimeout(60000);
    const homePage = new HomePage(page);

    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await homePage.aside.share.waitFor({ state: "visible" });
    await homePage.aside.share.click();
    await page.getByRole("button", { name: "Share files" }).click();
    await page.getByRole("menuitem", { name: "From space" }).click();

    const shareWindow = await page.getByText("Share", { exact: true });
    expect(await shareWindow.isVisible()).to.be.true;
  });
});
