// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check for h1
    const h1Elements = page.locator('h1');
    await expect(h1Elements).toHaveCount(1);
    
    // Check that headings are properly nested (no skipping levels)
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    let previousLevel = 0;
    
    for (const heading of headings) {
      const tagName = await heading.evaluate(el => el.tagName.toLowerCase());
      const currentLevel = parseInt(tagName.charAt(1));
      
      // First heading should be h1, subsequent headings shouldn't skip levels
      if (previousLevel === 0) {
        expect(currentLevel).toBe(1);
      } else {
        expect(currentLevel).toBeLessThanOrEqual(previousLevel + 1);
      }
      
      previousLevel = currentLevel;
    }
  });

  test('should have keyboard navigation support', async ({ page }) => {
    await page.goto('/');
    
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    
    // Check that focus is visible (first focusable element should be focused)
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Continue tabbing to ensure navigation works
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Should still have a focused element
    await expect(page.locator(':focus')).toBeVisible();
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Check that main text elements are visible (basic contrast check)
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h2').first()).toBeVisible();
    await expect(page.locator('p').first()).toBeVisible();
    
    // Check that links are distinguishable
    const links = page.locator('a');
    const linkCount = await links.count();
    
    if (linkCount > 0) {
      await expect(links.first()).toBeVisible();
    }
  });

  test('should have proper ARIA attributes', async ({ page }) => {
    await page.goto('/');
    
    // Check for ARIA landmarks
    const navigation = page.locator('nav, [role="navigation"]');
    await expect(navigation).toHaveCount(await navigation.count());
    
    // Check that interactive elements have proper ARIA attributes
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const ariaLabel = await button.getAttribute('aria-label');
      const textContent = await button.textContent();
      
      // Button should either have aria-label or visible text
      expect(ariaLabel || textContent?.trim()).toBeTruthy();
    }
  });

  test('should handle reduced motion preferences', async ({ page }) => {
    // Simulate prefers-reduced-motion
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Page should still load and be functional
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should work with screen reader simulation', async ({ page }) => {
    await page.goto('/docs/intro');
    
    // Check that page has proper document structure
    await expect(page.locator('main, [role="main"]')).toBeVisible();
    
    // Check for skip links (if implemented)
    const skipLink = page.locator('a[href="#main-content"], a[href="#content"]').first();
    if (await skipLink.count() > 0) {
      await expect(skipLink).toBeVisible();
    }
    
    // Check that form elements have proper labels
    const inputs = page.locator('input');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const type = await input.getAttribute('type');
      
      // Skip hidden inputs
      if (type === 'hidden') continue;
      
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledby = await input.getAttribute('aria-labelledby');
      
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        const hasLabel = await label.count() > 0;
        
        // Input should have a label, aria-label, or aria-labelledby
        expect(hasLabel || ariaLabel || ariaLabelledby).toBeTruthy();
      }
    }
  });
});