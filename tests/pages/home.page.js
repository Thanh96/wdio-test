import Page from './basePage';

export default class HomePage extends Page {
  /**
   * Define selectors
   */

  // Navbar
  get navbar() {
    return $('.navbar');
  }

  get navbar_searchBtn() {
    return $('.navbar button.DocSearch');
  }

  // Search
  get search() {
    return $('.DocSearch--active');
  }

  get search_input() {
    return $('.DocSearch--active input.DocSearch-Input')
  }

  get search_item() {
    return $('.DocSearch--active .DocSearch-Dropdown .DocSearch-Hit-title')
  }

  get search_item_index() {
    return $$('.DocSearch--active .DocSearch-Dropdown .DocSearch-Hit-title');
  }

  // Main page
  get heroBanner() {
    return $('.hero');
  }

  get heroTitle() {
    return $('.hero__subtitle');
  }

  get article_title() {
    return $('.container article h1')
  }

  // Footer
  get footer() {
    return $('.footer');
  }

  /**
   * Verify User is navigated to Home page
   */
  async verifyNavigatedToHomePage() {
    await this.waitForUrlContain('https://webdriver.io/')
    await this.isElementDisplayed(this.navbar)
    await this.isElementDisplayed(this.heroBanner)
    await this.isElementExisting(this.footer)
    await this.verifyElementContainsText(this.heroTitle, 'Next-gen browser and mobile automation test framework for Node.js');
  }
}