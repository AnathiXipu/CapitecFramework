//class = .
//id = #

// Importing means we're bringin code rom another file into this one

//BasePage contains common functionality we want to reuse

import BasePage from "../BasePage.js";

//This will be a very simple homePage for DemoBlaze

//What is a class? A class is a blueprint for creating objects

//"extends" BasePage means this class inhereits all the methods and properties from the BasePage

// This lets us reuse code instead of writing the same things ove and over

class SimpleHomePage extends BasePage {


    /** 
    @param {import ('@playwright/test').Page} page -- //Playwright page object
    
    //This special comment tells the editor that 'page' is aa Playwright page object
    //It helps with code completion and error checking 
    
    */

    // The constructor is a special method that runs when we create a new instance o its class
    //It's like the initialaization procedure
    constructor(page) {
        // 'Super' calls the parent class{BasePage} constructor
        // We must call this before using 'this' in the constructor
        super(page);

        // 'this' refers to the current instance of SimpleHomePage
        //We're setting properties on this specific instance

        this.baseUrl = 'https://www.demoblaze.com/';

        // I will follow this up with the CSS selector - ways to find elements on the web page
        this.laptopCategory = 'a[onClick="byCat(\'notebook\')"]';
        this.productLinks = '.card-title a';
        this.cartLink = '#cartur';


    }
    /**
     * Go the website home page
     * Each methd should do one specific thing as the name suggests
     */



    // 'async' means that this function will do something that takes time
    // It allows the code to run while waiting for the browser
    async goToHomePage() {

        //'await' pauses execution until the navigation() method completes
        //Without await, the code would continue before the page finishes loading

        await this.navigate('/');

        console.log("Navigate to the DemoBlaze home page");

    }

    /**
     * Clicks on laptop category
     * 
     * 
     */

    async clickLaptopsCategory() {

        //this.page comes from BasePage - It's the playwright page object
        // click() is a playwright method that clicks on an element
        await this.page.click(this.laptopCategory)

        await this.page.waitForTimeout(1000);
        console.log('Clicked on Laptop category');

    }


    //let productName = " Anathi"; --- This is an Example 
    async clickProduct(productName) {


        const products = await this.page.locator(this.productLinks).all();

        //products has all of the items

        //for ... of loop - iterates over each product element we found

        /* for (let i = 0; ProductsArray.length(); i++) {


        }*/

        for (const product of products) {
            // textContent() gets the text content - inside an element
            const text = await product.textContent();

            //If the text matches the product name we're looking for
            if (text === productName) {

                await product.click();
                console.log(`Clicked on product: ${productName} `);

                //Let's define the return statement
                //return is used to return a value from a function
                //In this case, we're returning the product name
                return;

            }

            //This else is not necessary - It will give unnecessary console logs - The Return is sefule in this scenario

            /*
            else { 

                console.log("No products found :( ")
            }
            */

        }

    }

    async goToCart() {

        await this.page.click(this.cartLink);
        await this.page.waitForTimeout(1000);
    }



}
export default SimpleHomePage;