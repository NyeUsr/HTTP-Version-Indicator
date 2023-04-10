chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const tabId = sender.tab.id;
  let title = message;
  let icon;

  if (message === "h2") {
    title = "HTTP/2";
    icon = "h2";
  } else if (message.startsWith("h3")) {
    title = "HTTP/3"
    icon = "h3";
  } else {
    icon = "h1";
  }

  browser.pageAction.setIcon({ path: "icons/" + icon + ".png", tabId });
  browser.pageAction.setTitle({ tabId, title });
});