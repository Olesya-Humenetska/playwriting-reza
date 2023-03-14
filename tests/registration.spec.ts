import { chromium, test, expect } from '@playwright/test';


// LambdaTest capabilities
//     const capabilities = {
//         'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//         'browserVersion': 'latest',
//         'LT:Options': {
//             'platform': 'Windows 10',
//             'build': 'Playwright Sample Build',
//             'name': 'Playwright Sample Test',
//             'user': 'olesya240891@gmail.com',
//             'accessKey': '0fGjUyFq6yEEf8lkbI2U0eZXU1LyPCIkMIcVBnSRLutOuTvcEd',
//             'network': true,
//             'video': true,
//             'console': true
//         },
//     };

    // const browser = chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    // );
    // const page = browser.newPage();


test.describe.parallel('Test Registration', async () => {
// test.describe.skip('Test Registration', async () => {

    // const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
    // ${encodeURIComponent(JSON.stringify(capabilities))}`);
    // const context = await browser.newContext();
    // const page = await context.newPage();

    test.beforeEach( async ({ page }) => {
        // await page.goto('https://rezax.ovdal.dk/');
        await page.goto('https://stage.reza.ovdal.dk/');
    });
    const TODO_ITEMS = [
        'Olesya1hh+1',
        'olesya1hh+1@gmail.com',
        'olesya1hh+1@gmail.com',
        'olesya1hh+1@gmail.com',
    ];
    // test.only('Terms', async ({ page }) => {
    //     const reseller = await page.locator(".header-top .header-link");
    //     await expect(reseller).toBeVisible();
    //     await expect(page.locator('.header-top .header-link span')).toContainText(['Become a reseller']);
    //     await page.locator('.header-top .header-link').click();
    //
    //     await expect(page.locator('.form form > .form-controll:nth-of-type(1)')).toContainText(['I have read and accept Terms and conditions']);
    //     await page.locator("#termsAccepted").uncheck();
    //     await page.locator('.form form > .form-controll:nth-of-type(1) .form-item--label').click();
    // });

    test.only('Registration', async ({ page }) => {
        const reseller = await page.locator(".header-top .header-link");
        await expect(reseller).toBeVisible();
        await expect(page.locator('.header-top .header-link span')).toContainText(['Become a reseller']);
        await page.locator('.header-top .header-link').click();

        // 'Login => Sign Up'

        // await page.locator('.ov-login').click();
        // const register = await page.locator(".form-actions:nth-of-type(2) a");
        // await expect(register).toBeVisible();
        // await expect(page.locator('.form-actions:nth-of-type(2) a')).toContainText(['Register']);
        // await page.locator('.form-actions:nth-of-type(2) .edit-btn').click();

        // 'Create account'
        await expect(page.locator('h1')).toContainText(['Become a reseller']);

        // =================================================================Personal details

        await expect(page.locator('#customer h3')).toContainText(['Personal details']);

        await expect(page.locator('.form-section .form-controll:nth-of-type(1)')).toContainText(['First name']);

        // await page.locator('#customer > .form-controll:nth-of-type(1)').click();
        await page.locator('label').filter({ hasText: 'First name' }).click();
        // await page.locator('#customer_firstname').fill('Olesya1hh+1');
        // const firstname = page.locator('#customer_firstname');
        // await expect(firstname).toHaveValue(/[Olesya1hh+1]/);

        await page.locator('#customer_firstname').fill(TODO_ITEMS[0]);
        const firstname = page.locator('#customer_firstname');
        await expect(firstname).toHaveValue(/[TODO_ITEMS[0]]/);

        await page.locator('label').filter({ hasText: 'Middle name' }).click();
        await page.locator('#customer_middlename').fill('Ihorivna');
        const middlename = page.locator('#customer_middlename');
        await expect(middlename).toHaveValue(/[Ihorivna]/);

        await page.locator('label').filter({ hasText: 'Last name' }).click();
        await page.locator('#customer_lastname').fill('Hum');
        const lastname = page.locator('#customer_lastname');
        await expect(lastname).toHaveValue(/[Hum]/);

        await expect(page.locator('#select2-customer_phoneCode-container')).toContainText(['93']);
        // await page.locator('.form-controll .form-controll-name').filter({ hasText: 'phone number' }).click();
        await page.locator('#select2-customer_phoneCode-container').filter({ hasText: '93' }).click();
        await page.getByRole('option', { name: '380' }).getByText('380').click();
        await page.locator('#customer_phoneNumber').click();
        // await page.locator('#customer_phoneNumber').fill('685750058');
        await page.locator('#customer_phoneNumber').fill('961023423');

        await page.getByText('Email Address').click();
        // await page.getByLabel('Email Address').fill('olesya1hh+1@gmail.com');
        await page.getByLabel('Email Address').fill(TODO_ITEMS[1]);
        await page.getByText('Repeat Email').click();
        // await page.getByLabel('Repeat Email').fill('olesya1hh+1@gmail.com');
        await page.getByLabel('Repeat Email').fill(TODO_ITEMS[1]);

        // await page.getByText('Password', { exact: true }).click();
        // await page.getByLabel('Password', { exact: true }).fill('123456Hh');
        // await page.getByText('Repeat Password').click();
        // await page.getByLabel('Repeat Password').fill('123456Hh');

        // customer_user

        // await page.locator('#customer_user .form-controll:nth-of-type(1)').filter({ hasText: 'Password' }).click();
        await page.locator('#customer_user .form-controll:nth-of-type(1)').click();
        await page.locator('#customer_user_plainPassword_first').fill('123456Hh');
        const password = page.locator('#customer_user_plainPassword_first');
        await expect(password).toHaveValue(/[123456Hh]/);

        // await page.locator('#customer_user .form-controll:nth-of-type(2)').filter({ hasText: 'Repeat Password' }).click();
        await page.locator('#customer_user .form-controll:nth-of-type(2)').click();
        await page.locator('#customer_user_plainPassword_second').fill('123456Hh');
        const password_repeat = page.locator('#customer_user_plainPassword_second');
        await expect(password_repeat).toHaveValue(/[123456Hh]/);

        // await page.getByText('Password', { exact: true }).click();
        // await page.getByLabel('Password', { exact: true }).fill('123456Hh');
        // await page.getByText('Repeat Password').click();
        // await page.getByLabel('Repeat Password').fill('123456Hh');

        // ================================================================================= Company details

        await expect(page.locator('#address h3')).toContainText(['Company details']);

        await expect(page.locator('#address .form-controll:nth-of-type(1)')).toContainText(['Company name']);
        await page.locator('#address .form-controll:nth-of-type(1)').click();
        await page.locator('#address_company').fill('OVDAL');

        await expect(page.locator('#address .form-controll:nth-of-type(2)')).toContainText([' Address line']);
        await page.locator('#address .form-controll:nth-of-type(2)').click();
        await page.locator('#address_address').fill('Zelena');

        await expect(page.locator('#address .form-controll:nth-of-type(3)')).toContainText(['Address line 2']);
        await page.locator('#address .form-controll:nth-of-type(3)').click();
        await page.locator('#address_address2').fill('147');

        await expect(page.locator('#address .form-controll:nth-of-type(4)')).toContainText(['Zip code']);
        await page.locator('#address .form-controll:nth-of-type(4)').click();
        await page.locator('#address_postcode').fill('79035');

        // await expect(page.locator('#address .form-controll:nth-of-type(5)')).toContainText(['City']);
        // await page.locator('#address .form-controll:nth-of-type(5)').click();
        // await page.locator('#address_city').fill('Lviv');

        await page.locator('#select2-address_country-container').click();
        await page.getByRole('option', { name: 'Ukraine' }).getByText('Ukraine').click();
        await page.locator('.form-controll:nth-of-type(6)  .select2-selection').click();
        await page.locator('.select2-search__field').click();
        await page.locator('.select2-search__field').fill('ukr');
        await page.getByRole('option', { name: 'Ukraine' }).getByText('Ukraine').click();

        // ===============================================================================  END Company details

        await expect(page.locator('#address .form-controll:nth-of-type(7)')).toContainText(['Web address']);
        await page.locator('#address .form-controll:nth-of-type(7)').click();
        await page.locator('#address_webAddress').fill('https://www.google.com/');

        // ==================================================================AccountDetails

        await expect(page.locator('#accountDetails h3')).toContainText(['Account details and preferences']);

        await expect(page.locator('#accountDetails .form-controll:nth-of-type(1) .form-controll-name')).toContainText(['Tax/VAT no. (conditional)']);
        await page.locator('#accountDetails .form-controll:nth-of-type(1)').click();
        await page.locator('#accountDetails_VAT').fill('20');

        await expect(page.locator('#accountDetails .form-controll:nth-of-type(2) .form-controll-name')).toContainText(['Customer type']);
        await page.locator('#accountDetails .form-controll:nth-of-type(2)').click();

        await page.locator('#accountDetails_customerGroups').selectOption('70272');
        await page.locator('#accountDetails_customerGroups').selectOption('70273');
        // await page.getByRole('combobox', { name: 'Customer type' }).selectOption('439431');

        // ================================================================== Terms and conditions

        await expect(page.locator('.form form >  .form-controll:nth-of-type(1)')).toContainText(['I have read and accept Terms and conditions']);
        await page.locator("#termsAccepted").uncheck();
        // await page.locator('.form form >  .form-controll:nth-of-type(1)').click();

        await expect(page.locator('.form form > .form-controll:nth-of-type(2)')).toContainText(['Sign up for our newsletter and join our universe of beautiful rugs, unique desig']);
        await page.locator("#newsletterActive").uncheck();


        // ================================================================== Create account
        await expect(page.locator('#submit .button-title')).toContainText(['Create account']);
        await page.locator('#submit').click();

        // ================================================================== Terms and conditions error
        await expect(page.locator('.form form >  .form-controll.error:nth-of-type(1)')).toContainText(['I have read and accept Terms and conditions']);
        await page.locator("#termsAccepted").uncheck();



        const  error_conditions = page.locator('.form form >  .form-controll.error');
        // await expect(error_conditions).toHaveCSS('color', '#bf0007');
        await expect(error_conditions).toHaveCSS('color', 'rgb(191, 0, 7)');

        // const  error = page.locator('.form-controll.error');
        // await expect(error).toHaveCSS('color', 'rgb(191, 0, 7)');

        // ====================form-message error .form-message.error
        await expect(page.locator('.form-error-item')).toContainText(['This value should not be blank.']);

        // const  error_message = page.locator('.form-error-item').nth(1);
        const  error_message = page.locator('.form-error-item').first();
        await expect(error_message).toBeVisible();
        await expect(error_message).toHaveCSS('color', 'rgb(191, 0, 7)');

        // =============================================================================== Company details CITY
        await expect(page.locator('#address .form-controll:nth-of-type(5)')).toContainText(['City']);
        await page.locator('#address .form-controll:nth-of-type(5)').click();
        await page.locator('#address_city').fill('Lviv');

        // ===============================================================================  END Company details


        // ================================================================== Terms and conditions CHECK and CLICK

        await expect(page.locator('.form form > .form-controll:nth-of-type(1)')).toContainText(['I have read and accept Terms and conditions']);
        await page.locator("#termsAccepted").uncheck();
        await page.locator('.form form > .form-controll:nth-of-type(1) .form-item--label').click();

        // ================================================================== Create account CLICK
        await expect(page.locator('#submit .button-title')).toContainText(['Create account']);
        await page.locator('#submit').click();


        // ===================================================================================== Password

        // await page.locator('#customer_user .form-controll:nth-of-type(1)').filter({ hasText: 'Password' }).click();
        await page.locator('#customer_user .form-controll:nth-of-type(1)').click();
        await page.locator('#customer_user_plainPassword_first').fill('123456Hh');
        const password_again = page.locator('#customer_user_plainPassword_first');
        await expect(password_again).toHaveValue(/[123456Hh]/);

        // await page.locator('#customer_user .form-controll:nth-of-type(2)').filter({ hasText: 'Repeat Password' }).click();
        await page.locator('#customer_user .form-controll:nth-of-type(2)').click();
        await page.locator('#customer_user_plainPassword_second').fill('123456Hh');
        const password_repeat_again = page.locator('#customer_user_plainPassword_second');
        await expect(password_repeat_again).toHaveValue(/[123456Hh]/);

        // ================================================================== Create account CLICK
        // await expect(page.locator('#submit .button-title')).toContainText(['Create account']);
        // await page.locator('#submit').click();

        await expect(page.locator('#popup-messages-wrapper .alert-success')).toContainText(['Thank you for your interest in becoming our retailer. We will get back to you with a confirmation by email within 2 working days.']);
        const  success_registration = page.locator('.popup-messages-wrapper .alert-success');
        // await expect(success_registration).toBeVisible();
        await expect(success_registration).toHaveCSS('background-color', 'rgb(209 231 221)');
        await page.locator('.popup-message-close').click();



//         await page.setContent(`.form-error-item`);
//         const div = await page.$('.form-error-item');
// // Waiting for the 'span' selector relative to the div.
//         const span = await div.waitForSelector('.form-error-item');


        // await page.getByText('I have read and accept Terms and conditions').click();
        // await page.getByText('I have read and accept Terms and conditions').click();
        // await page.getByText('Sign up for our newsletter and join our universe of beautiful rugs, unique desig').first().click();
        // await page.getByText('Sign up for our newsletter and join our universe of beautiful rugs, unique desig').first().click();
        // await page.getByRole('button', { name: ' Create account' }).click();
        // await page.getByText('I have read and accept Terms and conditions').click();
        // await page.getByText('I have read and accept Terms and conditions').click();
    });


    // test('Login => Sign Up', async ({ page }) => {
    //     await page.locator('.ov-login').click();
    //
    //     const register = await page.locator(".form-actions:nth-of-type(2) a");
    //     await expect(register).toBeVisible();
    //     await expect(page.locator('.form-actions:nth-of-type(2) a')).toContainText(['Register']);
    //     await page.locator('.form-actions:nth-of-type(2) .edit-btn').click();
    // });

    // test('Create account', async ({ page }) => {
    //
    // });



});

