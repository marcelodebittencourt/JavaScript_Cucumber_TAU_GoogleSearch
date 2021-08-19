var assert = require('assert');
import searchResultsPage from "../../pages/SearchResults"
/**
 * Ensure link text includes keyword
 * 
 * @param {Array.Object} links List of WebDriverIO elements
 * @param {String} keyword Search keyword
 */
export default keyword => {
    searchResultsPage.searchResultsLinks.forEach(link => {
        const linkText = link.getText().toLowerCase();
        if (linkText) {
            assert(
                linkText.includes(keyword),
                `Link ${linkText} does not include ${keyword}`
            );
        }
    });
};