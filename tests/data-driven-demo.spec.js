import { test, expect } from '../src/fixtures/testFixtures';
import productData from '../src/data/products';


for (const laptop of productData.laptops) {

    test(`Shopping flow with ${laptop.name}`, async ({ homePage, productPage, cartPage, page }) => {

        // Step 1: Go to the DemoBlaze home page
        await homePage.goToHomePage();



        await homePage.clickLaptopsCategory();
        await page.waitForTimeout(2000);


        const title = await productPage.getProductTitle();
        expect(title).toContain(laptop.name);


        await homePage.clickProduct(laptop.name);
        await page.waitForTimeout(2000);


        await productPage.addToCart();
        await page.waitForTimeout(2000);

        await homePage.goToCart();
        await page.waitForTimeout(2000);

    }

    )

}