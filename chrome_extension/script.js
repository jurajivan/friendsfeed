var hideStoryPreference = true;

chrome.storage.sync.get({
	hideStory: true
}, function(preferences) {
	hideStoryPreference = preferences.hideStory;
});

$('body').on('DOMNodeInserted', '._5pcb', function(event) {
	clearAddedFeed(event.originalEvent);
});

clearExistingFeed();

function clearExistingFeed() {
	var elements = document.querySelectorAll('._1qbu');
	[].forEach.call(elements, function(element) {
		var storyElement = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
		hideStory(storyElement);
	});
	appendStyle('#stream_pagelet ._5pcb { height:auto; overflow:auto; }');
}

function clearAddedFeed(event) {
	var storyElement = event.target;
	if(isElement(storyElement) && storyElement.classList.contains('_4-u2')) {
		if(storyElement.querySelector('._1qbu')) {
			hideStory(storyElement);
		}
	}
}

function hideStory(el) {
	if(hideStoryPreference) {
		el.style.display = "none";
	} else {
		el.style.opacity = .4;
	}
}

function appendStyle(content) {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = content;
	document.getElementsByTagName('head')[0].appendChild(style);
}

function isElement(obj) {
	return (typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName==="string");
}