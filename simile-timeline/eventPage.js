
// Experimenting with simple message passing
// see manifest.json (http://developer.chrome.com/extensions/event_pages.html)
//    "background": {
//    "scripts": ["eventPage.js"],
//    "persistent": false
//  },
// 
// see http://developer.chrome.com/extensions/messaging.html
//
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: '<div id="boom">GOODBYE</div>'});
  });