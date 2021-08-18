import {Then} from "@cucumber/cucumber";
import verifyLinksContent from "../../support/assertions/verifyLinksContent"

Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
    const links = $$(".LC20lb");
    verifyLinksContent(links, keyword);
})