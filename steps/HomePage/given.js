import goToURL from "../../support/actions/goToURL"
import homePage from "../../pages/Home";
import {Given} from "@cucumber/cucumber";

Given("a web browser is at the Google home page", () => {
    goToURL(homePage.url);    
});