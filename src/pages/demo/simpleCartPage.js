// Importing means we're bringin code rom another file into this one

//BasePage contains common functionality we want to reuse

import BasePage from "../BasePage.js";

//This will be a very simple homePage for DemoBlaze

//What is a class? A class is a blueprint for creating objects

//"extends" BasePage means this class inhereits all the methods and properties from the BasePage

// This lets us reuse code instead of writing the same things ove and over

class SimpleCartPage extends BasePage {


    /** 
    @param {import ('@playwright/test').Page} page -- //Playwright page object
    
    //This special comment tells the editor that 'page' is aa Playwright page object
    //It helps with code completion and error checking 
    
    */

    // The constructor is a special method that runs when we create a new instance in its class
    //It's like the initialaization procedure
    constructor(page) {
        // 'Super' calls the parent class{BasePage} constructor
        // We must call this before using 'this' in the constructor
        super(page);

        // This selector uses the :nth-chikd pseudo-selector
        //It finds the second cell in each row of the table body
        // This is where product names appwar in the DemoBlazer cart


        //This selector targets the second cell in each roe of the table body within the cart.
        //The '#tbodyid' part refers to the table body elements with the ID 'tbodyid'.
        //The 'td:nth-child(2)' part specifies that we want the second 'td' (table data) element in each row.
        //This is wehre the names of the products in the DemoBlaze cart are displayed. 
        this.productNames = '#tbodyid td:nth-child(2)'; // Preend that productNames = sony

        //#tbodyid - is the first part
        // td:nth-child(2) - is the second part

        //Locator #2
        // This is the "Place Order" button in the cart
        this.placeOrderButton = '.btn-success';



    }


    /**
     * Check if the specific product is in the cart
     * @param {string} productName - Name of product  to check for
     * @returns {Promise<boolean} True if product is in cart
     * Boolean means this returns true of false
     * 
     * 
     * 
     */

    async hasProduct(productName) {
        //Get all products names in cart
        const products = await this.page.locator(this.productNames).all();

        for (const product of products) {
            // textContent() gets the text content - inside an element
            const text = await product.textContent();

            //If the text matches the product name we're looking for
            // ==   ===
            if (text === productName) {

                await product.click();
                console.log(`Found product in cart: ${productName} `);

                //Let's define the return statement
                //return is used to return a value from a function
                //In this case, we're returning the product name
                return true;
            }
        }


        console.log(`Product not found in cart: ${productName}`);
        return false;

    }

    //Place an Order for the item/s in the cart
    async placeOrder() {

        await this.page.click(this.placeOrderButton);
        console.log('Clicked Place Order Button');
        await this.page.waitForTimeout(1000);

    }

}

export default SimpleCartPage;

