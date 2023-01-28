
function formatContent(htmlBody) {
	let contentRegex =/alt="rozbor-d[\S]la"><\/p>((?:.|\n)*)<!-- AI CONTENT END 1 -->/gm
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
	return content;
}




