import { test, expect } from '@playwright/test';

test('unsuccessfulLogin', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').fill('uaser@gmail.com');
  await page.getByPlaceholder('Пароль').fill('password');
  await page.getByTestId('login-submit-btn').click();
  
  await expect (page.getByTestId('login-error-hint')).toHaveText('Вы ввели неправильно логин или пароль')
});