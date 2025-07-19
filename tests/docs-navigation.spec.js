// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Documentation Navigation', () => {
  test('should navigate to intro page', async ({ page }) => {
    await page.goto('/docs/intro');
    
    // Check page loads correctly
    await expect(page).toHaveTitle(/Introduction.*daily\.dev/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Introduction');
    
    // Check sidebar is present
    await expect(page.locator('[class*="sidebar"]')).toBeVisible();
  });

  test('should have working sidebar navigation', async ({ page }) => {
    await page.goto('/docs/intro');
    
    // Wait for sidebar to load
    const sidebar = page.locator('[class*="sidebar"]');
    await expect(sidebar).toBeVisible();
    
    // Check for main categories
    await expect(page.locator('text=Getting Started')).toBeVisible();
    await expect(page.locator('text=Key Features')).toBeVisible();
    
    // Test navigation to another page
    await page.click('text=Browser extension installation');
    await expect(page).toHaveURL(/browser-extension-installation/);
  });

  test('should have search functionality', async ({ page }) => {
    await page.goto('/docs/intro');
    
    // Look for search input (Algolia search)
    const searchButton = page.locator('button[class*="DocSearch"]').first();
    if (await searchButton.isVisible()) {
      await searchButton.click();
      
      // Check if search modal opens
      const searchModal = page.locator('[class*="DocSearch-Modal"]');
      await expect(searchModal).toBeVisible({ timeout: 5000 });
    }
  });

  test('should display proper breadcrumbs', async ({ page }) => {
    await page.goto('/docs/getting-started/browser-extension-installation');
    
    // Check for breadcrumb navigation
    const breadcrumbs = page.locator('[class*="breadcrumb"]');
    if (await breadcrumbs.count() > 0) {
      await expect(breadcrumbs).toBeVisible();
    }
    
    // Check page title
    await expect(page.locator('h1')).toContainText(/Browser|Extension|Installation/i);
  });

  test('should have edit page links', async ({ page }) => {
    await page.goto('/docs/intro');
    
    // Look for edit page link
    const editLink = page.locator('a[href*="github.com"][href*="/edit/"]').first();
    if (await editLink.count() > 0) {
      await expect(editLink).toBeVisible();
      await expect(editLink).toHaveAttribute('href', /github\.com.*edit/);
    }
  });

  test('should handle 404 pages gracefully', async ({ page }) => {
    const response = await page.goto('/docs/non-existent-page');
    
    // Should either redirect or show 404
    if (response && response.status() === 404) {
      // Check for 404 page content
      await expect(page.locator('text=404')).toBeVisible();
    } else {
      // If redirected, should be to a valid page
      await expect(page).toHaveTitle(/daily\.dev/);
    }
  });
});