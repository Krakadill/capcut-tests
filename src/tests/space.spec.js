import { test } from '@playwright/test';
import { expect } from 'chai';
import HomePage from '../po/pages/home.page';
import { homePageUrl } from './test-data/commonUrl';

test.describe('Test suite for workspace feature', () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test('User opens new Space', async () => {
    await homePage.open(homePageUrl);
    const createSpaceBtn = await homePage.createNewSpace();
    expect(await createSpaceBtn.isVisible()).to.be.true;
  });
});
