var isFirefox = typeof InstallTrigger !== "undefined";
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;

function browserOrChrome() {
  return isEdge ? browser : chrome;
}

browserOrChrome().browserAction.onClicked.addListener(() => {
  this.expand();
});

// Remove duplicate entries for Edge
browserOrChrome().contextMenus.remove("Windowfy");

browserOrChrome().contextMenus.create({
  id: "Windowfy",
  title: "Windowfy",
  onclick: expand
});

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
  //   }
  // });
}
