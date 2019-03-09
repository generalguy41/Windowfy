/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { sites } from './sites.js'

var isFirefox = typeof InstallTrigger !== "undefined";
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;

function browserOrChrome() {
    return isEdge ? browser : chrome;
}

browserOrChrome().browserAction.onClicked.addListener(() => {
    this.windowfy();
});

// Remove duplicate entries for Edge
browserOrChrome().contextMenus.remove("Windowfy");

browserOrChrome().contextMenus.create({
    id: "Windowfy",
    title: "Windowfy",
    onclick: windowfy
});

function windowfy() {
    browserOrChrome().tabs.executeScript({
        code: `let SITES = ${JSON.stringify(sites)};`,
    });

    browserOrChrome().tabs.executeScript({
        file: "scripts/windowfy.js",
    });
}
