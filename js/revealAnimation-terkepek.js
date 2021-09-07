(function($) { "use strict";

	function Selector_Cache() {
		var collection = {};

		function get_from_cache( selector ) {
			if ( undefined === collection[ selector ] ) {
				collection[ selector ] = $( selector );
			}

			return collection[ selector ];
		}

		return { get: get_from_cache };
	}

	var selectors = new Selector_Cache();

		(function() {
			// Fake loading.
			setTimeout(init, 1000);

			function init() {
				document.body.classList.remove('loading');

				//************************ reveal on load ********************************
				
				var rev1 = new RevealFx(document.querySelector('#rev-load-1'), {
					revealSettings : {
						bgcolor: '#987033',
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev1.reveal();

				var rev2 = new RevealFx(document.querySelector('#rev-load-2'), {
					revealSettings : {
						bgcolor: '#838D92',
						delay: 250,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev2.reveal();

				//************************ reveal on scroll ********************************
				
				var scrollElemToWatch_3 = document.getElementById('rev-3'),
					watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -100),				
					rev3 = new RevealFx(scrollElemToWatch_3, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_4 = document.getElementById('rev-4'),
					watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -100),
					rev4 = new RevealFx(scrollElemToWatch_4, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_5 = document.getElementById('rev-5'),
					watcher_5 = scrollMonitor.create(scrollElemToWatch_5, -100),
					rev5 = new RevealFx(scrollElemToWatch_5, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_6 = document.getElementById('rev-6'),
					watcher_6 = scrollMonitor.create(scrollElemToWatch_6, -300),
					rev6 = new RevealFx(scrollElemToWatch_6, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev7 = new RevealFx(document.querySelector('#rev-7'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev8 = new RevealFx(document.querySelector('#rev-8'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),	
					scrollElemToWatch_9 = document.getElementById('rev-9'),
					watcher_9 = scrollMonitor.create(scrollElemToWatch_9, -300),
					rev9 = new RevealFx(scrollElemToWatch_9, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev10 = new RevealFx(document.querySelector('#rev-10'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev11 = new RevealFx(document.querySelector('#rev-11'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_12 = document.getElementById('rev-12'),
					watcher_12 = scrollMonitor.create(scrollElemToWatch_12, -300),
					rev12 = new RevealFx(scrollElemToWatch_12, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev13 = new RevealFx(document.querySelector('#rev-13'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev14 = new RevealFx(document.querySelector('#rev-14'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_15 = document.getElementById('rev-15'),
					watcher_15 = scrollMonitor.create(scrollElemToWatch_15, -300),
					rev15 = new RevealFx(scrollElemToWatch_15, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev16 = new RevealFx(document.querySelector('#rev-16'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev17 = new RevealFx(document.querySelector('#rev-17'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_18 = document.getElementById('rev-18'),
					watcher_18 = scrollMonitor.create(scrollElemToWatch_18, -300),
					rev18 = new RevealFx(scrollElemToWatch_18, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev19 = new RevealFx(document.querySelector('#rev-19'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev20 = new RevealFx(document.querySelector('#rev-20'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					})	
					
				watcher_3.enterViewport(function() {
					rev3.reveal();
					watcher_3.destroy();
				});
				watcher_4.enterViewport(function() {
					rev4.reveal();
					watcher_4.destroy();
				});
				watcher_5.enterViewport(function() {
					rev5.reveal();
					watcher_5.destroy();
				});	
				watcher_6.enterViewport(function() {
					rev6.reveal();
					rev7.reveal();
					rev8.reveal();
					watcher_6.destroy();
				});	
				watcher_9.enterViewport(function() {
					rev9.reveal();
					rev10.reveal();
					rev11.reveal();
					watcher_9.destroy();
				});
				watcher_12.enterViewport(function() {
					rev12.reveal();
					rev13.reveal();
					rev14.reveal();
					watcher_12.destroy();
				});	
				watcher_15.enterViewport(function() {
					rev15.reveal();
					rev16.reveal();
					rev17.reveal();
					watcher_15.destroy();
				});	
				watcher_18.enterViewport(function() {
					rev18.reveal();
					rev19.reveal();
					rev20.reveal();
					watcher_18.destroy();
				});					
			}
		})();
		
  })(jQuery); 		
		