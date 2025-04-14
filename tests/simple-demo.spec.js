/*
1. Goes to  https://www.demoblaze.com - Demoblaze website
2. Click on category
3. Select a product
4. Adds it to cart
5. Verifies its in the cart
*/

import { test, expect } from '../src/fixtures/testFixtures';

test('simple shopping flow with DemoBalze', async ({ homePage, productPage, cartPage, formPage, page }) => {

    // Step 1: Go to the DemoBlaze home page
    await homePage.goToHomePage();

    // Step 2: Click on Laptops Category
    await homePage.clickLaptopsCategory();
    await page.waitForTimeout(3000); // Wait for the page to load
    // Step 3: Click on a specific laptop
    const laptopToTest = 'MacBook air';
    await homePage.clickProduct(laptopToTest);

    // Step 4: Verify we're on the right products page
    // We get the product title text from the page
    const title = await productPage.getProductTitle();

    //Our First check - make sure we're looking at the right product
    // expect() is a Playwright assertion function
    // .toContain() checks if the title includes our product name

    await page.waitForTimeout(1000); // Wait for the page to load
    expect(title).toContain(laptopToTest);

    // Step 5: Add to the cart
    await productPage.addToCart();

    // Step 6: Go to cart
    await homePage.goToCart();
    await page.waitForTimeout(3000); // Wait for the page to load
    // Step 7: Verify products is in cart
    // We check if our product is in cart
    const isInCart = await cartPage.hasProduct(laptopToTest);

    //Step 7 - make sure the product was added to the cart
    // .toBeTruthy() - checks if the value is true
    expect(isInCart).toBeTruthy();

    // Step 8: Place an order
    await cartPage.placeOrder();
    await page.waitForTimeout(1000); // Wait for the page to load

    // Step 9: Fill in the purchase form
    const fullName = 'Anathi Xipu';
    const country = 'South Africa';
    const city = 'Cape Town';
    const creditCard = '12234589876';
    const month = 'April';
    const year = '2025';

    await formPage.fillPurchaseForm(fullName, country, city, creditCard, month, year);
    await page.waitForTimeout(1000); // Wait for the page to load

    // // Step 10: Click Purchase button
    // await formPage.clickPurchaseItems();
    // await page.waitForTimeout(1000); // Wait for the page to load

    // // FINAL CHECK!!!:  Verify purchase confirmation message
    // await formPage.thankYouMessage();

});
