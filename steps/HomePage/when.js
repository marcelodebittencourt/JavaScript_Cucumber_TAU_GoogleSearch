import {When} from "@cucumber/cucumber"
import search from "../../support/actions/search";

When(/^the user enters "(.*)" into the search bar$/, keyword => {
    search(keyword, $(".gLFyf.gsfi"), $(".gNO89b") );
});