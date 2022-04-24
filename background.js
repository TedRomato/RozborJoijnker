

//// background.js

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

let results;

chrome.runtime.onMessage.addListener(async (message, sender, response) => { 
  if(message.action === 'display-results') {
    results = message.results;
    chrome.tabs.create({url: "/result.html"}, async (tab) => {
    })
  }
  if(message.action === 'get-results') {
    response(results);
  }
});