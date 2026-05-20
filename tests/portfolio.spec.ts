import { test, expect } from '@playwright/test';

async function openPortfolio(page: import('@playwright/test').Page) {
  const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
  expect(response?.ok(), 'Expected portfolio URL to return an OK response').toBeTruthy();
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('.site-header, .hero, footer.site-footer', { timeout: 30000 });
}

// Test 1 — Page title check
test('page loads and has correct title', async ({ page }) => {
  await openPortfolio(page);
  await expect(page).toHaveTitle(/Patrick Miguel/i);
});

// Test 2 — Navigation links
test('navigation links are visible', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openPortfolio(page);
  const navToggle = page.locator('.nav-toggle');
  await expect(navToggle).toBeVisible({ timeout: 20000 });
  await navToggle.click();
  const mobileNavigation = page.locator('.site-nav.open');
  await expect(mobileNavigation.locator('a[href="#about"]')).toBeVisible({ timeout: 15000 });
  await expect(mobileNavigation.locator('a[href="#projects"]')).toBeVisible({ timeout: 15000 });
  await expect(mobileNavigation.locator('.mobile-nav-links a[href="#contact"]')).toBeVisible({ timeout: 15000 });
});

// Test 3 — Hero section
test('hero section displays name and role', async ({ page }) => {
  await openPortfolio(page);
  const heroSection = page.locator('.hero');
  await expect(heroSection).toBeVisible({ timeout: 20000 });
  await expect(heroSection.locator('.hero-title')).toBeVisible({ timeout: 20000 });
  await expect(heroSection.locator('.hero-role')).toBeVisible({ timeout: 20000 });
});

// Test 4 — Projects section
test('projects section is visible with at least one project', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openPortfolio(page);
  const navToggle = page.locator('.nav-toggle');
  await expect(navToggle).toBeVisible({ timeout: 20000 });
  await navToggle.click();
  const mobileNavigation = page.locator('.site-nav.open');
  await mobileNavigation.locator('a[href="#projects"]').click();
  const projectsSection = page.locator('#projects');
  await expect(projectsSection).toBeVisible({ timeout: 20000 });
  await expect(projectsSection.locator('.project-card').first()).toBeVisible({ timeout: 20000 });
});

// Test 5 — GitHub link
test('GitHub profile link is present and correct', async ({ page }) => {
  await openPortfolio(page);
  const githubLink = page.locator('footer.site-footer .footer-social a[href*="github.com/Patpatty19"]');
  await expect(githubLink).toBeVisible({ timeout: 20000 });
  await expect(githubLink).toHaveAttribute('target', '_blank');
});

// Test 6 — Mobile responsive
test('portfolio is responsive on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openPortfolio(page);
  await expect(page.locator('.hero')).toBeVisible({ timeout: 20000 });
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
});