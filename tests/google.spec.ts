import { test, expect } from '@playwright/test';

test.describe.skip('Test Google', async () => {

    test.beforeEach( async ({ page }) => {
        await page.goto('https://www.google.com/');
        await page.goto('https://www.google.com/');
    });


    test('YouTube', async ({ page }) => {
        // await page.goto('https://www.google.com/'); move to beforeEach
        // await page.getByRole('combobox', { name: 'search' }).fill('hello');
        // await page.getByRole('combobox', { name: 'Search Google or type a URL' } ).fill('hello');
        await page.getByRole('combobox').fill('hello');
        await page.getByRole('combobox').press('Enter');
        await page.getByRole('link', { name: 'Adele - Hello (Lyrics) YouTube Aqua Lyrics 4 хвилини і 57 секунд 24 січ. 2021 р.' }).click();
        await page.getByPlaceholder('Search').click();
        await expect(page).toHaveTitle('Adele - Hello (Lyrics) - YouTube')
    });

    test('Wikipedia', async ({ page }) => {
        // await page.goto('https://www.google.com/'); move to beforeEach
        // let any = await page.getByRole('combobox', { name: 'Пошук' }).fill('Adele');
        let any = await page.getByRole('combobox').fill('Adele');
        await page.getByRole('combobox').press('Enter');
        await page.locator('.ruhjFe.NJLBac.fl').click();

        await expect(page.locator('.mw-page-title-main')).toHaveText('Адель (співачка)');
        await expect(page).toHaveTitle('Адель (співачка) — Вікіпедія');
    });
    // Reserved by you
    // await page.getByText('Email').click();
    // await page.getByLabel('Email').click();
    // await page.getByLabel('Email').fill('boikoovdal@gmail.com');
    // await page.getByText('Password', { exact: true }).click();
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('FCE]5=JSLma%bzmy');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByRole('link', { name: 'Logout' }).click();
    // await page.getByRole('link', { name: 'Login' }).click();

});

