import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pages/home.page';

const homePage = new HomePage();

Then('I verify that user is navigated to home page', async () => {
  await homePage.verifyNavigatedToHomePage();
});

When('I click search btn', async () => {
  console.log('I click search button on navbar');
  await homePage.click(homePage.navbar_searchBtn);

  console.log('I can see search popup');
  await homePage.isElementDisplayed(homePage.search);
});

When('I enter search input with value {string}', async (value) => {
  console.log(`I enter value: ${value}`);
  await homePage.addValue(homePage.search_input, value);

  console.log('I can search popup');
  await homePage.waitForElementDisplayed(homePage.search_item, 2);
  await homePage.isElementDisplayed(homePage.search_item);
});

Then('I see search result', async () => {
  console.log('Click search result item');
  const item = await homePage.getText(homePage.search_item_index[0]);
  await homePage.click(homePage.search_item_index[0]);

  console.log('Verify user is navigated to page')
  await homePage.waitForElementDisplayed(homePage.article_title);
  console.log('text', item);
  await homePage.verifyElementContainsText(homePage.article_title, item);
});



