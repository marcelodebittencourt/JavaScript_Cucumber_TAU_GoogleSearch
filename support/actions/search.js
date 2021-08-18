/**
 * Search for a keyword
 * 
 * @param {String} keyword keyword to search for
 * @param {object} inputField WebdriverIO input field
 * @param {object} submitButton WebdriverIO submit field
 */
export default (keyword, inputField, submitButton) => {
    inputField.waitForDisplayed(5000);
    inputField.click();
    inputField.setValue(keyword);
    submitButton.waitForDisplayed(5000);
    submitButton.click();
};
