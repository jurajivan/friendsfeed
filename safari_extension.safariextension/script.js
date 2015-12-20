(function() {

	var settings, init = function() {
		$('body').on('DOMNodeInserted', '._5pcb', function(event) {
			clearAddedFeed(event.originalEvent);
		});
		var elements = document.querySelectorAll('._1qbu');
		[].forEach.call(elements, function(element) {
			var storyElement = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
			hideStory(storyElement);
		});
	};

	safari.self.addEventListener("message", function(e) {
		if(e.name === "setSettings") {
			settings = e.message;
			init();
		}
	}, false);

	safari.self.tab.dispatchMessage("getSettings");

	function clearAddedFeed(event) {
		var storyElement = event.target;
		if(isElement(storyElement) && storyElement.classList.contains('_4-u2')) {
			if(storyElement.querySelector('._1qbu')) {
				hideStory(storyElement);
			}
		}
	}

	function hideStory(el) {
		if(settings.hideStory == 1) {
			el.style.display = "none";
		} else {
			el.style.opacity = .4;
		}
	}

	function isElement(obj) {
		return (typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName==="string");
	}

}());