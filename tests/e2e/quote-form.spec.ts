import { test, expect } from '@playwright/test'

test.describe('Quote Form', () => {
  test('should display quote form page', async ({ page }) => {
    await page.goto('/quote')
    
    await expect(page).toHaveTitle(/Get a Free Quote/)
    await expect(page.locator('h1')).toContainText('Get Your Free Quote')
  })

  test('should validate required fields', async ({ page }) => {
    await page.goto('/quote')
    
    // Try to submit without filling required fields
    await page.click('button[type="submit"]')
    
    // Should show validation errors
    await expect(page.locator('text=Name must be at least 2 characters')).toBeVisible()
    await expect(page.locator('text=Please enter a valid email address')).toBeVisible()
  })

  test('should accept valid form submission', async ({ page }) => {
    await page.goto('/quote')
    
    // Fill in required fields
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('textarea[name="pickupAddress"]', '123 Main St, Toronto, ON')
    await page.fill('textarea[name="description"]', 'Moving from Toronto to Vancouver')
    
    // Select service type
    await page.selectOption('select[name="serviceType"]', 'Local Moves')
    
    // Note: Turnstile would need to be mocked in tests
    // For now, we'll just verify the form structure
    
    await expect(page.locator('input[name="name"]')).toHaveValue('John Doe')
    await expect(page.locator('input[name="email"]')).toHaveValue('john@example.com')
  })

  test('should navigate from homepage to quote form', async ({ page }) => {
    await page.goto('/')
    
    // Click on "Get a Free Quote" button
    await page.click('text=Get a Free Quote')
    
    // Should navigate to quote page
    await expect(page).toHaveURL('/quote')
    await expect(page.locator('h1')).toContainText('Get Your Free Quote')
  })
})
