import { test, expect } from '@playwright/test';

test.describe.skip('Test REZA', async () => {
// test.describe.parallel('Test REZA', async () => {

    test.beforeEach( async ({ page }) => {
        // await page.goto('https://rezax.ovdal.dk/');
        await page.goto('https://stage.reza.ovdal.dk/');
        await page.locator('.ov-login').click();
        await page.locator('.form-section .form-controll:nth-of-type(1)').click();
        await page.locator('#_username').fill('boikoovdal@gmail.com');
        await page.locator('.form-section .form-controll:nth-of-type(2)').click();
        await page.locator('#_password').fill('FCE]5=JSLma%bzmy');
        await page.locator('.form-section .form-controll:nth-of-type(3)').click();
        const remember = await page.locator("#_remember_me");
        await expect(remember).toBeChecked();
        await page.locator('.form-section button.btn').click();
        const logout = await page.locator(".ov-logout");
        await expect(logout).toBeVisible();
    });

    test('Log in', async ({ page }) => {
        const logout = await page.locator(".ov-logout");
        await expect(logout).toBeVisible();
    });

    test.only('Add to Cart', async ({ page }) => {

        // ========================================================Check reserved item

        await page.getByRole('link', { name: 'Shop rugs', exact: true }).click();
        await page.getByRole('link', { name: 'Design Rugs' }).click();
        await page.getByRole('link', { name: 'Damask Collection' }).click();
        // await page.locator('#ov_product_plate_id_235051').getByRole('button', { name: 'Add to Cart' }).click();
        const reserved = page.locator('#ov_product_plate_id_235051 .button-title');
        await expect(reserved).toContainText('Reserved by you');
        await page.locator('.bucket-icon').click();

        const checkitem = page.locator('.basket-list');
        await expect(checkitem).toContainText('Item no. 1434859');
        await page.getByText('Item no. 1434859').click();

        // ========================================================Check button Checkout

        await expect(page.locator('.basket-actions > a')).toContainText(['Empty Shopping Cart', 'Continue Shopping', 'Checkout']);
        await page.getByText('Checkout').click();

        // ========================================================Confirm your details and complete order

        await expect(page.locator('h1')).toContainText(['Order Summary']);
        await expect(page.locator('.page-title-descr .sub-title')).toContainText(['Confirm your details and complete order']);

        await expect(page.locator('.form-section:nth-of-type(1) h3')).toContainText(['Contact information']);

        await expect(page.locator('.form-section .form-controll:nth-of-type(1)')).toContainText(['Full name']);
        const fullName = page.locator('#contact_fullName');
        await expect(fullName).toHaveValue(/[TEST OVDAL 1]/);

        await expect(page.locator('.form-section .form-controll:nth-of-type(2)')).toContainText(['Company']);
        const company = page.locator('#contact_company');
        await expect(company).toHaveValue(/[TEST OVDAL]/);

        await expect(page.locator('.form-section .form-controll:nth-of-type(3)')).toContainText(['Email']);
        const email = page.locator('#contact_email');
        await expect(email).toHaveValue(/[boikoovdal@gmail.com]/);

        await expect(page.locator('.form-section .form-controll:nth-of-type(4)')).toContainText(['Phone']);
        const phone = page.locator('#contact_phone');
        await expect(phone).toHaveValue(/[3423423423423]/);

        await expect(page.locator('.edit-info')).toContainText(['Go to your']);
        await expect(page.locator('.edit-info a')).toContainText(['Account Page']);

        // ========================================================Delivery information

        await expect(page.locator('.form-section:nth-of-type(2) h3')).toContainText(['Delivery information']);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(1)')).toContainText(['Company']);
        const delivery_company = page.locator('#delivery_company');
        await expect(delivery_company).toHaveValue(/[TEST OVDAL]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(2)')).toContainText(['Firstname']);
        const delivery_firstname = page.locator('#delivery_firstname');
        await expect(delivery_firstname).toHaveValue(/[TEST]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(3)')).toContainText(['Middlename']);
        const delivery_middlename = page.locator('#delivery_middlename');
        await expect(delivery_middlename).toHaveValue(/[TEST MMMIDD]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(4)')).toContainText(['Lastname']);
        const delivery_lastname = page.locator('#delivery_lastname');
        await expect(delivery_lastname).toHaveValue(/[Camilla]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(5)')).toContainText(['Phone number']);
        const delivery_phoneNumber = page.locator('#delivery_phoneNumber');
        await expect(delivery_phoneNumber).toHaveValue(/[3423423423423]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(6)')).toContainText(['Address']);
        const delivery_address = page.locator('#delivery_address');
        await expect(delivery_address).toHaveValue(/[Unsbjergvej 20]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(7)')).toContainText(['Address2']);
        const delivery_address2 = page.locator('#delivery_address2');
        await expect(delivery_address2).toHaveValue(/[Add2]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(8)')).toContainText(['Postcode']);
        const delivery_postcode = page.locator('#delivery_postcode');
        await expect(delivery_postcode).toHaveValue(/[5220]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(9)')).toContainText(['City']);
        const delivery_city = page.locator('#delivery_city');
        await expect(delivery_city).toHaveValue(/[Odense SØ]/);


        // await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(10)')).toContainText(['Country']);
        // const delivery_country = page.locator('#delivery_country');
        // await expect(delivery_country).toHaveValue(/[Sweden]/);

        await expect(page.locator('.form-section:nth-of-type(2) .form-controll:nth-of-type(10)')).toContainText(['Country']);
        const delivery_country = page.locator('#select2-delivery_country-container');
        await expect(delivery_country).toContainText(['Sweden']);

        await expect(page.locator('.edit-info:nth-of-type(1)')).toContainText(['Go to your']);
        await expect(page.locator('.edit-info:nth-of-type(1) a')).toContainText(['Account Page']);

        // ======================================================== Billing information

        await expect(page.locator('.form-section:nth-of-type(3) h3')).toContainText(['Billing information']);

        await expect(page.locator('.form-section:nth-of-type(3) .form-item--label')).toContainText(['Billing is same as delivery']);

        await page.locator("#billing_billing").uncheck();

        await expect(page.locator('.textarea-wrapper h3')).toContainText(['Customer note']);
        await expect(page.locator('.textarea-wrapper p')).toContainText([' Optional note explanation. Where to put package, when to ship, i. e. ']);

        await expect(page.locator('#note .form-controll-name')).toContainText([' Note ']);
        await expect(page.locator('#countField')).toContainText([' 300 ']);
        await expect(page.locator('.char-count')).toContainText(['characters left']);


        await expect(page.locator('.total .title')).toContainText(['Order total']);

        await page.locator("#termsAndConditions").uncheck();

        await expect(page.locator('.form-actions .edit-btn')).toContainText(['Edit order']);

        await expect(page.locator('.form-actions button')).toContainText(['Confirm order']);
        await page.locator('.form-actions button').click();

        await expect(page.locator('.form-message.error .form-error-item')).toContainText(['Terms and conditions must be accepted']);


    });

});

