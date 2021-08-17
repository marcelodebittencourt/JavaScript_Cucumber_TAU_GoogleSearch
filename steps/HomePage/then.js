import {When} from "@cucumber/cucumber"

When(/^the user enters "(.*)" into the search bar$/, keyword => {
    $(".gLFyf.gsfi").waitForDisplayed(5000);
    $(".gLFyf.gsfi").click();
    $(".gLFyf.gsfi").setValue(keyword);
    $(".gNO89b").waitForDisplayed(5000);
    $(".gNO89b").click();
})