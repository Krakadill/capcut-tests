import { test } from '@playwright/test';
import { expect } from 'chai';
import HomePage from '../po/pages/home.page';
import { homePageUrl } from './test-data/commonUrl';

test.describe('Test suite for file and media sharing feature', () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test('User opens share window', async () => {
    await homePage.open(homePageUrl);
    const shareWindow = await homePage.openShareWindow();
    expect(await shareWindow.isVisible()).to.be.true;
  });
});
