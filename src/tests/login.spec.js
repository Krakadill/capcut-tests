import { test } from '@playwright/test';
import { expect } from 'chai';
import LoginPage from '../po/pages/login.page';
import { validEmail, validPassword } from './test-data/credentials';

test.skip(true, 'Skipping signup tests for now');
test.use({ storageState: 'emptyStorageState.json' });

test.describe('Test suite for login feature', () => {
  let loginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });
  test('User logs-in with valid credentials', async () => {
    await loginPage.open('https://www.capcut.com/login');
    const currentUrl = await loginPage.login(validEmail, validPassword);
    expect(currentUrl).to.include('start_tab=video');
  });
});
