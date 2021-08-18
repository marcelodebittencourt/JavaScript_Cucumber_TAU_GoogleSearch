import goToURL from "../../support/actions/goToURL"
import {Given} from "@cucumber/cucumber";

Given("a web browser is at the Google home page", () => {
    goToURL("/");    
});