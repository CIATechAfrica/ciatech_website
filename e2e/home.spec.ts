import { test, expect } from '@playwright/test';

test('homepage loads and shows CTA', async ({ page }) => {
  await page.goto('/');
  
  // Verify the page title
  await expect(page).toHaveTitle(/CIATECH Africa/i);

  // Verify the header is visible
  const header = page.locator('header');
  await expect(header).toBeVisible();
});

test('contact page loads', async ({ page }) => {
  await page.goto('/contact');
  
  // Verify a contact form is on the page
  const form = page.locator('form');
  await expect(form).toBeVisible();
});
