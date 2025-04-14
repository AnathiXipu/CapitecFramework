// Importing means we're bringin code rom another file into this one

//BasePage contains common functionality we want to reuse

import BasePage from "../BasePage.js";

//This will be a very simple homePage for DemoBlaze

//What is a class? A class is a blueprint for creating objects

//"extends" BasePage means this class inhereits all the methods and properties from the BasePage

// This lets us reuse code instead of writing the same things ove and over

class SimplePurchaseFormPage extends BasePage {


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


        //This selector targets the second cell in each roe of the table body within the cart.
        //The '#tbodyid' part refers to the table body elements with the ID 'tbodyid'.
        //The 'td:nth-child(2)' part specifies that we want the second 'td' (table data) element in each row.
        //This is wehre the names of the products in the DemoBlaze cart are displayed. 
        this.fullName = '#name';
        this.country = '#country';
        this.city = '#city';
        this.creditCard = '#card';
        this.month = '#month';
        this.year = '#year';


        //Locator #2
        // This is the "Purchase" button in the cart
        this.purchaseItems = '.btn-primary';


    }


    /**
     * 
     *  @param {import ('@playwright/test').Page} page -- //Playwright page object
     * 
     */

    async fillPurchaseForm(fullName, country, city, creditCard, month, year) {
        // Fill in the purchase form with the provided details
        await this.page.fill(this.fullName, fullName);
        await this.page.fill(this.country, country);
        await this.page.fill(this.city, city);
        await this.page.fill(this.creditCard, creditCard);
        await this.page.fill(this.month, month);
        await this.page.fill(this.year, year);

    }
    // Once you are done filling in the orm  - You can now click the "Purchase" button to complete the order
    // This method will be used to click the purchase button
    // async clickPurchaseItems() {
    //     // Click the purchase button to complete the order
    //     await this.page.click(this.purchaseItems);
    // }

    // // This method will be used to get the purchase confirmation message
    // async thankYouMessage() {
    //     // Wait for the confirmation message to appear and get its text content
    //     const confirmationMessage = await this.page.locator('.sweet-alert').textContent();
    //     console.log(`The  Purchase has been successfully completed: ${confirmationMessage}`);
    //     return confirmationMessage;
    // }
}
export default SimplePurchaseFormPage;
// Importing means we're bringin code from another file into this one

