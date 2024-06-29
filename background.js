chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const tabId = sender.tab.id;
  let title = message;
  let icon = "default";

  // https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/nextHopProtocol#value
  if (message.startsWith("h2")) {
    title = "HTTP/2";
    icon = "h2";
  }
  else if (message === "h3") {
    title = "HTTP/3";
    icon = "h3";
  }
  else if (message.startsWith("http")) {
    title = message.toUpperCase();
    icon = "h1";
  }

  browser.pageAction.setIcon({ path: "icons/" + icon + ".png", tabId });
  browser.pageAction.setTitle({ tabId, title });
});
