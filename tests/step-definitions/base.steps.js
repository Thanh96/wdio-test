import { Given, When, Then } from '@wdio/cucumber-framework';

import Page from '../pages/basePage';

const basePage = new Page(); 

Given('I am on the home page', async () => {
  console.log('I am on the home page');
  await basePage.visitPage()
});

Given('I am on the {string}', async (url) => {
  console.log(`I am on the ${url}`);
  await basePage.open(url);
});
