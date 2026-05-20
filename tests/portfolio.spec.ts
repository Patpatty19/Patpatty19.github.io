import { test, expect } from '@playwright/test';

const URL = 'https://patpatty19.github.io/';

// Test 1 — Page title check
test('page loads and has correct title', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle(/Patrick Miguel/i);
});

// Test 2 — Navigation links
test('navigation links are visible', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(URL);
  const navToggle = page.locator('.nav-toggle');
  await expect(navToggle).toBeVisible();
  await navToggle.click();
  const mobileNavigation = page.locator('.site-nav.open');
  await expect(mobileNavigation.locator('a[href="#about"]')).toBeVisible();
  await expect(mobileNavigation.locator('a[href="#projects"]')).toBeVisible();
  await expect(mobileNavigation.locator('.mobile-nav-links a[href="#contact"]')).toBeVisible();
});

// Test 3 — Hero section
test('hero section displays name and role', async ({ page }) => {
  await page.goto(URL);
  const heroSection = page.locator('.hero');
  await expect(heroSection).toBeVisible();
  await expect(heroSection.locator('.hero-title')).toBeVisible();
  await expect(heroSection.locator('.hero-role')).toBeVisible();
});

// Test 4 — Projects section
test('projects section is visible with at least one project', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(URL);
  const navToggle = page.locator('.nav-toggle');
  await expect(navToggle).toBeVisible();
  await navToggle.click();
  const mobileNavigation = page.locator('.site-nav.open');
  await mobileNavigation.locator('a[href="#projects"]').click();
  const projectsSection = page.locator('#projects');
  await expect(projectsSection).toBeVisible();
  await expect(projectsSection.locator('.project-card').first()).toBeVisible();
});

// Test 5 — GitHub link
test('GitHub profile link is present and correct', async ({ page }) => {
  await page.goto(URL);
  const githubLink = page.locator('footer.site-footer .footer-social a[href*="github.com/Patpatty19"]');
  await expect(githubLink).toBeVisible();
  await expect(githubLink).toHaveAttribute('target', '_blank');
});

// Test 6 — Mobile responsive
test('portfolio is responsive on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(URL);
  await expect(page.locator('.hero')).toBeVisible();
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
});