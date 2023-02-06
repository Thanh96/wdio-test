import Page from './basePage';

export default class HomePage extends Page {
  /**
   * Define selectors
   */

  // Navbar
  get navbar() {
    return $('.navbar');
  }

  // Main page
  get heroBanner() {
    return $('.hero');
  }

  get heroTitle() {
    return $('.hero__subtitle');
  }

  // Footer
  get footer() {
    return $('.footer');
  }

  /**
   * Verify User is navigated to Home page
   */
  async verifyNavigatedToHomePage() {
    await this.waitForUrlContains('https://webdriver.io/')
    await this.isElementDisplayed(this.navbar)
    await this.isElementDisplayed(this.heroBanner)
    await this.isElementExisting(this.footer)
    await epxect(this.heroTitle).toHaveText('Next-gen browser and mobile automation test framework for Node.js');

  }

}