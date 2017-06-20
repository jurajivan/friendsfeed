function save_options() {
	var hideStory = document.getElementById('display_hide').checked ? true : false,
		hideFriendsFeedNewsVersion;
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
		hideStory: true, 
		hideFriendsFeedNewsVersion: null
	}, function(items) {
		document.getElementById('display_hide').checked = items.hideStory;
		document.getElementById('display_fade').checked = !items.hideStory;
		if(items.hideFriendsFeedNewsVersion != null) {
			document.getElementById('display_ff_banner').style.display = "block";
		}
	});
}

function restore_ff_banner() {
	chrome.storage.sync.set({
		hideFriendsFeedNewsVersion: null
	}, function() {
		document.getElementById('display_ff_banner').style.display = "none";
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('display_ff_banner').addEventListener('click', restore_ff_banner);
document.getElementById('save').addEventListener('click', save_options);