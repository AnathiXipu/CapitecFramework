/*
1. Goes to  https://www.demoblaze.com - Demoblaze website
2. Click on category
3. Select a product
4. Adds it to cart
5. Verifies its in the cart
*/

import { test, expect } from '../src/fixtures/testFixtures';

test('simple shopping flow with DemoBalze', async ({ homePage, productPage, cartPage, page }) => {

    // Step 1: Go to the DemoBlaze home page
    await homePage.goToHomePage();

    // Step 2: Click on Laptops Category
    await homePage.clickLaptopsCategory();
    await page.waitForTimeout(5000); // Wait for the page to load
    // Step 3: Click on a specific laptop
    const laptopToTest = 'MacBook air';
    await homePage.clickProduct(laptopToTest);

    // Step 4: Verify we're on the right products page
    // We get the product title teext from the page
    const title = await productPage.getProductTitle();

    //Our First check - make sure we're looking at the right product
    // expect() is a Playwright assertion function
    // .toContain() checks if the title includes our product name

    await page.waitForTimeout(2000); // Wait for the page to load
    expect(title).toContain(laptopToTest);

    // Step 5: Add to the cart
    await productPage.addToCart();

    // Step 6: Go to cart
    await homePage.goToCart();
    await page.waitForTimeout(5000); // Wait for the page to load
    // Step 7: Verify products is in cart
    // We check if our product is in cart
    const isInCart = await cartPage.hasProduct(laptopToTest);

    //Our Final CHECK!!! - make sure the product was added to the cart
    // .toBeTruthy() - checks if the value is true
    expect(isInCart).toBeTruthy();

});
