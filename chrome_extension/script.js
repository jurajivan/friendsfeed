var hideStoryPreference = true,
	newsFeedSelector = '._5pcb',
	storySelector = '._5jmm',
	storyHeaderSelector = '._1qbu',
	headerUserSelector = '._2s25',
	footerSelector = '#pagelet_rhc_footer',
	loggedUserHref = null;

var friendsFeedNews = {
	"version": 1,
	"html": '<div class="_1-ia"><div class="_4-u2 _1-ib _2tyk _20os _4-u8"><div class="pagelet _5qrt2 _1snm p_uvt3d8v_b"><div class="uiHeader uiHeaderTopBorder mbs uiSideHeader"><div class="clearfix uiHeaderTop"><div class="rfloat _ohf"><a class="uiHeaderActions" id="hideFriendsFeedNews" href="javascript:void(0)">Hide This</a></div><div><h6 class="uiHeaderTitle" aria-hidden="true" style="padding-top:2px;"><a class="adsCategoryTitleLink" href="http://www.facebook.com/friendsfeedapp" target="_blank">Friends Feed</a></h6></div></div></div><div class="ff_share_friends_feed"><div class="ff_image"><div class="uiScaledImageContainer"><img class="scaledImageFitWidth img" src="data:image/png;base64,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" width="284" height="100"></div></div><div class="ff_about u_uvt3d8v_8">Thank you for using friends feed extension. It makes Facebook better and more readable by hiding unwanted stories and ads. Help spread the word and share it with your dear friends.</div><div class="ff_actions"><a class="ff_share_button ff_button _42ft _4jy0 _55pi _5vto _55_p _2agf _4jy3 _517h _51sy share_action_link _5f9b" role="button" href="/ajax/sharer/?id=240073403067660" rel="dialog"><span class="_55pe"><i class="mrs img sp_KqJwnRQljGF_2x sx_2bcdec"></i>Share</span></a> <a href="http://www.facebook.com/friendsfeedapp" target="_blank" class="ff_like_button ff_button _42ft _4jy0 _55pi _5vto _55_p _2agf _4jy3 _517h _51sy" role="button"><i class="_3-8_ img sp_GDA2F0irL02_2x sx_b4ed67"></i>Like</a></div></div></div></div></div>'
}

var hideFriendsFeedNewsVersion = localStorage.getItem('hideFriendsFeedNewsVersion') || null;

chrome.storage.sync.get({
	hideStory: true
}, function(preferences) {
	hideStoryPreference = preferences.hideStory;
	clearExistingFeed();
	clearSidebar();
});

document.body.addEventListener('DOMNodeInserted', function(event) {
	clearNewStories(event);
});

if(document.querySelector(headerUserSelector) && document.querySelector(headerUserSelector).href) {
	loggedUserHref = document.querySelector('._2s25').href.replace(/\?.+/, '');
}

function clearExistingFeed() {
	var storyElements = document.querySelectorAll(storySelector);
	[].forEach.call(storyElements, function(storyElement) {
		processStory(storyElement);
	});
	// On load we hide News Feed, to prevent blick of unwanted stories
	// Now when first stories are filtered, we can show it
	// document.querySelector('#stream_pagelet').classList.add('show');
	appendStyle('#stream_pagelet ._5pcb { height:auto; overflow:auto; }');
}

function clearNewStories(event) {
	var storyElement = event.target.parentNode;
	processStory(storyElement);
}

function processStory(storyElement) {
	if(!isElement(storyElement)) return;
	if(!storyElement.classList.contains('_5jmm')) return;
	// Define story header selector
	if(storyElement.querySelector('._1qbu')) {
		storyHeaderSelector = '._1qbu';
	}
	if(storyElement.querySelector('._5g-l')) {
		storyHeaderSelector = '._5g-l';
	}
	// Story with header
	if(storyElement.querySelector(storyHeaderSelector)) {
		var linkElements = storyElement.querySelectorAll(storyHeaderSelector + ' a'),
			authorElement = storyElement.querySelector('._5va4 ._5pbw._5vra a'), //.profileLink
			authorElements = storyElement.querySelectorAll('._5va4 ._5pbw._5vra a'),
			otherElement = storyElement.querySelector(storyHeaderSelector + ' a[data-tooltip-content]'),
			linkElementsHrefs = getArrayOfHrefs(linkElements),
			authorElementsHrefs = getArrayOfHrefs(authorElements);
		// When your firend, author of the post is in the N-others href
		if(otherElement && authorElement) {
			var authorName = authorElement.innerHTML,
				othersWhoReactedToStory = otherElement.dataset.tooltipContent.split("\n");
			if(othersWhoReactedToStory.indexOf(authorName) != -1) {
				// Author is reacting to his own story
				return;
			}
		}
		// When your friend comments on your post or his own post
		linkElementsHrefs.push(loggedUserHref);
		var match = _.intersection(linkElementsHrefs, authorElementsHrefs);
		if(match.length == 0) {
			hideStory(storyElement);
			return;
		}
		// Check for Sponsored label instead of Story's timestamp
		if(storyElement.querySelector('._5paw._4dcu') && storyElement.querySelector('.PageLikeButton')) {
			hideStory(storyElement);
			return;
		}
		return;
		// When a friend like/comment a story of page he follows
		// Doesn't work, as it also selects stories of pages your friend shared
		// if(storyElement.querySelector('button.PageLikeButton')) {
		// 	hideStory(storyElement);
		// 	return;
		// }
	}
	// Sponsored Post
	if(storyElement.querySelector('._5g-l')) {
		hideStory(storyElement);
		return;
	}
	// Sponsored Page
	if(storyElement.querySelector('._3e_2._m8c')) {
		hideStory(storyElement);
		return;
	}
	// People you may know
	if(storyElement.querySelector('._1dwg._1w_m .mts')) {
		hideStory(storyElement);
		return;
	}
}

function clearSidebar() {
	// Run only on feed view
	if(window.location.pathname != "/") return;
	// Skip if already inserted
	if(document.querySelector('#pagelet_friendsfeed')) return;
	// Check for footer element
	if(!document.querySelector(footerSelector)) return;
	// Insert Friends Feed News
	insertFriendsFeedNews();
}

function insertFriendsFeedNews() {
	if(hideFriendsFeedNewsVersion && hideFriendsFeedNewsVersion == friendsFeedNews.version) return;
	var footerPanelElement = document.querySelector(footerSelector),
		friendsFeedNewsElement = document.createElement('div');
	friendsFeedNewsElement.setAttribute('id', 'pagelet_friendsfeed');
	friendsFeedNewsElement.setAttribute('class', 'pagelet-group pagelet');
	friendsFeedNewsElement.innerHTML = friendsFeedNews.html;
	footerPanelElement.parentNode.insertBefore(friendsFeedNewsElement, footerPanelElement);
	document.querySelector('#hideFriendsFeedNews').addEventListener("click", function(event) {
		event.preventDefault();
		document.querySelector('#pagelet_friendsfeed').style.display = 'none';
		localStorage.setItem('hideFriendsFeedNewsVersion', friendsFeedNews.version);
	});
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

function getArrayOfHrefs(elements) {
	var hrefs = [];
	[].forEach.call(elements, function(element) {
		hrefs.push(element.href.replace(/\?.+/, ''));
	});
	return hrefs;
}