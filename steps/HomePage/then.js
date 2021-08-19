import {Then} from "@cucumber/cucumber";
import verifyLinksContain from "../../support/assertions/verifyLinksContain"

Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
    verifyLinksContain(keyword);
})