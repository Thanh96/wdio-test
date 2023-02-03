import * as Constant from '../common/constants';

export default class BaseAction {

  async type(element, value) {
    await this.sleep(0.5);
    await element.setValue(value);
  }

  async addValue(element, value) {
    await this.sleep(0.5);
    await element.addValue(value);
  }

  async click(element) {
    await this.sleep(0.5);
    await element.click();
  }

  async getAttribute(element, attr) {
    await this.sleep(0.5);
    const attribute = await element.getAttribute(attr);
    return attribute;
  }

  async getText(element) {
    await this.sleep(0.5);
    const text = await element.getText();
    return text;
  }

  async getValue(element) {
    await this.sleep(0.5);
    const value = await element.getValue();
    return value;
  }

  async selectByAttribute(element, attribute, value) {
    await this.sleep(0.5);
    await element.selectByAttribute(attribute, value);
  }

  async getCSSProperty(element, cssProperty) {
    await this.sleep(0.5);
    const property = await element.getCSSProperty(cssProperty);
    return property;
  }

  async waitForElementExisting(element, time) {
    await this.sleep(0.5);
    await element.waitForExist({ timeout: time * 1000 || Constant.timeout.xl });
  }

  async waitForElementDisplayed(element, time) {
    await this.sleep(0.5);
    await element.waitForDisplayed({ timeout: time * 1000 || Constant.timeout.xl });
  }

  async waitForElementClickable(element, time) {
    await this.sleep(0.5);
    await element.waitForClickable({ timeout: time * 1000 || Constant.timeout.xl });
  }

  async waitForElementEnabled(element) {
    await this.sleep(0.5);
    await element.waitForEnabled({ timeout: Constant.timeout.xl });
  }

  async waitForElementDisabled(element) {
    await this.sleep(0.5);
    await element.waitForEnabled({ timeout: Constant.timeout.xl, reverse: true });
  }

  async waitForElementNotExisting(element, time) {
    await this.sleep(0.5);
    await element.waitForExist({ timeout: time * 1000 || Constant.timeout.xl, reverse: true });
  }

  async waitForTheConditionDisplayed(element, condition, customTimeout = null) {
    const timeout = customTimeout || Constant.timeout.xl;
    await browser.waitUntil(() => element.getText() === condition, timeout, `Expect ${condition} is not displayed after ${timeout}`, 1000);
  }

  async isElementDisplayed(element) {
    return await element.isDisplayed().then((isDisplayed) => {
      if (isDisplayed) {
        return isDisplayed = true;
      } else {
        return isDisplayed = false;
      }
    });
  }

  async isOrganizationSettingsElementDisplayed(element) {
    try {
      this.waitForElementDisplayed(element);
      return await this.isElementDisplayed(element);
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  async isElementEnabled(element) {
    try {
      await this.sleep(1);
      return await element.isEnabled();
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  async isElementExisting(element) {
    try {
      await this.sleep(1);
      return await element.isExisting();
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  async waitPageLoaded() {
    // not work with wdio >= v7.13.0
    await browser.waitUntil(() => {
      const state = browser.execute(() => {
        return document.readyState;
      });
      console.log("state:" + state)
      return state === 'complete';
    },
      {
        timeout: 60000, //60secs
        timeoutMsg: 'Oops! Check your internet connection'
      });
  }

  async waiForUrlContain(url) {
    await browser.waitUntil(() => {
      let pageUrl = browser.getUrl();
      return pageUrl.indexOf(url) > -1
    }, Constant.timeout.xl)
  }

  async sleep(s) {
    await browser.pause(s * 1000);
  }
}
