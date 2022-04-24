
chrome.runtime.sendMessage({action:'get-results'}, (response) => {
    const outputDiv = document.getElementById('Result');
    outputDiv.innerHTML = response;
});
