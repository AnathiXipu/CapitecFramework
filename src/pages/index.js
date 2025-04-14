// Export all page objects
// The index.js file works as a centeral hub for importing /exporting page objects
// This makes it easier to import multiple page objects in our tests
import SimpleHomePage from './demo/SimpleHomePage.js';
import SimpleProductPage from './demo/simpleProductPage.js';
import SimpleCartPage from './demo/simpleCartPage.js';
import SimplePurchaseFormPage from './demo/simplePurchaseFormPage.js';


// import BasePage from './BasePage.js';
// import LoginPage from './LoginPage.js';
// import ProductsPage from './ProductsPage.js';
// import CartPage from './CartPage.js';
// import CheckoutPage from './CheckoutPage.js';

//This export statemnt makes all these classes available to other files
//When another file imports from this index, it can access any of these

export {
    SimpleHomePage,
    SimpleProductPage,
    SimpleCartPage,
    SimplePurchaseFormPage
}; 