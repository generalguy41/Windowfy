/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { sites } from './sites.js'

/**
 * Save list of sites on web page for content script to access, then call to content script to
 * maximize video.
 */
function windowfy() {
    chrome.tabs.executeScript({
        code: `let SITES = ${JSON.stringify(sites)};`,
    });

    chrome.tabs.executeScript({
        file: "js/windowfy.js",
    });
}

chrome.browserAction.onClicked.addListener(() => {
    windowfy();
});

chrome.contextMenus.create({
    id: "Windowfy",
    title: "Windowfy",
    onclick: windowfy
});
