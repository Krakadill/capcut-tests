import { test } from '@playwright/test';
import { expect } from 'chai';
import HomePage from '../po/pages/home.page';
import { homePageUrl } from './test-data/commonUrl';

test.describe('testing AI tools functionality', () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test('User opens text-to-speech feature', async () => {
    await homePage.open(homePageUrl);
    const textToSpeechBtn = await homePage.openTextToSpeech();
    expect(await textToSpeechBtn.isVisible()).to.be.true;
  });
});
