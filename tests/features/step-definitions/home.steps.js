import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pages/home.page';

const homePage = new HomePage();

const pages = {
    home: homePage
};

Given('I am on the home page', async () => {
    await homePage.visitPage()
});

// Given('I am on the (\w+) page$/, async (page) => {
//     await pages[page].open(url);
// });

// Then(/^I verify that user is navigate to home page$/, async () => {
//     await homePage.verifyNavigatedToHomePage();
// });

// Then('I can see {string} button', async (text) => {
//     console.log(`I can see ${text} button`)
//     await basePage.verifyButtonDisplay(text)
//   })
