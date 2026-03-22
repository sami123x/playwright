import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await expect(page.getByRole('link', { name: 'real TodoMVC app.' })).toBeVisible();

  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('heading', { name: 'todos' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('walk the dog');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('kick the pig');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
//  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();

  await page.getByRole('listitem').filter({ hasText: 'walk the dog' }).getByLabel('Toggle Todo').check();
  await expect(page.getByRole('button', { name: 'Clear completed' })).toBeVisible();

  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
});

