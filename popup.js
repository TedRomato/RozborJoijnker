// Initialize button with user's preferred color
let run = document.getElementById("jojnk");

// When the button is clicked, inject setPageBackgroundColor into current page
run.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: displayResults,
    });
});

  
function displayResults() {
    let htmlBody = `${document.body.innerHTML}`;
    let contentRegex = /(?=Nahl.sit chybu\/n.zkou kvalitu<\/strong><\/a>[\r\n \t]*<\/th>[\r\n \t]*<\/tr>[\r\n \t]*<\/thead>[\r\n \t]*<\/table>[\r\n \t]*<\/div>[\r\n \t]*([\s\S]*))/gm;
    let content = contentRegex.exec(htmlBody)[1];
    content = content.replace(/<!-- AI CONTENT END 1 -->[\s\S]*/gm, ''); 
	content = content.replace(/<ins[^>]+?>/gm, '');
	content = content.replace(/<\/ins>/gm, '');
	content = content.replace(/<iframe[^>]+?>/gm, '');
	content = content.replace(/<\/iframe>/gm, '');
	content = content.replace(/<a[^>]+>/gm, '');
	content = content.replace(/<img[^>]+>/gm, '');
	content = content.replace(/<\/?div[^>]*?>/gm, '');
	content = content.replace(/<style[\s\S]+?\/style>/gm, '');
	content = content.replace(/<script[\s\S]+?\/script>/gm, '');
	content = content.replace(/<table[\s\S]+?\/table>/gm, '');
    chrome.runtime.sendMessage({action: 'display-results', results:content});
}



