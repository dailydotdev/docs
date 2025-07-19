// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page loads
    await expect(page).toHaveTitle(/daily\.dev/);
    
    // Check for main heading
    await expect(page.locator('h1')).toContainText('daily.dev docs');
    
    // Check for main navigation (not all nav elements)
    await expect(page.locator('nav[aria-label="Main"]')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Test docs link
    const docsLink = page.locator('a[href*="/docs/intro"]').first();
    await expect(docsLink).toBeVisible();
    
    // Test GitHub link
    const githubLink = page.locator('a[href*="github.com"]').first();
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /^https?:\/\/[^/]*github\.com\//);
  });

  test('should display feature cards', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check for feature cards
    const featureCards = page.locator('article[role="region"]');
    await expect(featureCards).toHaveCount(10); // Based on the homeNavBoxes component
    
    // Check specific feature categories using more specific selectors
    await expect(page.locator('h2:has-text("Getting Started")')).toBeVisible();
    await expect(page.locator('h2:has-text("Key features")')).toBeVisible();
    await expect(page.locator('h2:has-text("Squads")')).toBeVisible();
  });

  test('should have accessible images', async ({ page }) => {
    await page.goto('/');
    
    // All images should have alt text
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const alt = await image.getAttribute('alt');
      expect(alt).toBeTruthy(); // Should not be null or empty
    }
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check that content is still visible and accessible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav[aria-label="Main"]')).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload();
    
    // Wait for page to load after reload
    await page.waitForLoadState('networkidle');
    
    // Check that content adapts
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav[aria-label="Main"]')).toBeVisible();
  });
});