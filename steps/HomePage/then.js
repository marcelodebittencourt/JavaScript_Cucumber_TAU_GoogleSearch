import {Then} from "@cucumber/cucumber";
var assert = require('assert');

Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
    const links = $$(".LC20lb");
    links.forEach(link => {
        const linkText = link.getText().toLowerCase();
        if (linkText) {
            assert(
                linkText.includes(keyword),
                `Link text does not include ${keyword}`
            );
        }
    });
})