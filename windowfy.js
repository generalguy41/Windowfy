browser.browserAction.onClicked.addListener(() => {
  this.expand();
})

var contextId = window.browser.contextMenus.create({
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
      window.browser.tabs.executeScript({
          file: 'expand.js'
      });
  //   }
  // });
}

