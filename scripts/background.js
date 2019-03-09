<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { sites } from './sites.js'

var isFirefox = typeof InstallTrigger !== "undefined";
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
=======
var isIE = /* @cc_on!@ */ false || !!document.documentMode;
>>>>>>> 5c60690f5f077ae9692a3e16984e9e4f16c6f3aa
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

<<<<<<< HEAD
function windowfy() {
    browserOrChrome().tabs.executeScript({
        code: `let SITES = ${JSON.stringify(sites)};`,
    });

    browserOrChrome().tabs.executeScript({
        file: "scripts/windowfy.js",
    });
}
=======
function expand() {
  // browser.storage.local.get("state").then((data)=> {
  //   console.log(data.state.expanded)
  //   if ((data.state.expanded === false) || (data.state.expanded === null)){
  //     var state = {
  //       expanded: true
  //     }
  //     browser.storage.local.set({state});
  browserOrChrome().tabs.executeScript({
    file: "scripts/expand.js"
  });
}
>>>>>>> 5c60690f5f077ae9692a3e16984e9e4f16c6f3aa
