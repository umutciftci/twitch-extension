function injectTheScript() {
  // Gets all tabs that have the specified properties, or all tabs if no properties are specified (in our case we choose current active tab)
  chrome.tabs.query({ url: "https://twitch.tv/" }, function (tabs) {
    // Injects JavaScript code into a page
    if (tabs.length > 0) {
      chrome.tabs.executeScript(tabs[0].id, { file: "content_script.js" });
    } else {
      chrome.tabs.create({ url: "https://twitch.tv" });
    }
  });
}
// adding listener to your button in popup window
document
  .getElementById("clickactivity")
  .addEventListener("click", injectTheScript);
