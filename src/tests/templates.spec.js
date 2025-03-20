import { test } from '@playwright/test';
import { expect } from 'chai';
import HomePage from '../po/pages/home.page';
import { homePageUrl } from './test-data/commonUrl';

test.describe('Test suite for templates feature', () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test('User searches for templates', async () => {
    await homePage.open(homePageUrl);
    const templateSearchInput = await homePage.searchTemplates();
    expect(await templateSearchInput.isVisible()).to.be.true;
  });
});
