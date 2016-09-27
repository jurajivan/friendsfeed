function save_options() {
	var hideStory = document.getElementById('display_hide').checked ? true : false;
	chrome.storage.sync.set({
		hideStory: hideStory
	}, function() {
		var status = document.getElementById('status');
		status.textContent = '✓ Saved';
		setTimeout(function() {
			status.textContent = '';
		}, 1000);
	});
}

function restore_options() {
	chrome.storage.sync.get({
		hideStory: true
	}, function(items) {
		document.getElementById('display_hide').checked = items.hideStory;
		document.getElementById('display_fade').checked = !items.hideStory;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);