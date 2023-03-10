import BaseAction from '../common/baseAction';
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page extends BaseAction {
  /**
   * Visit page
   * @returns this
   */
  visitPage() {
    return browser.url('/');
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`/${path}`);
  }
}
