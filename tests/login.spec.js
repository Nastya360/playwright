import { test, expect } from '@playwright/test';
import { email, password } from '../user';

test('login', async ({ page }) => {
   await page.goto('https://netology.ru/?modal=sign_in');
   await page.getByPlaceholder('Email').fill(email);
   await page.getByPlaceholder('Пароль').fill(password);
   await page.getByTestId('login-submit-btn').click();
   await expect(page).toHaveURL('https://netology.ru/profile/8341313');
   await expect(page.getByRole('heading', { name: 'Моё обучение' })).toHaveText('Моё обучение');

});

