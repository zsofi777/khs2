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
				var	scrollElemToWatch_0 = document.getElementById('rev-0'),
						watcher_0 = scrollMonitor.create(scrollElemToWatch_0, -100),
						rev0 = new RevealFx(scrollElemToWatch_0, {
							revealSettings : {
								bgcolor: '#987033',
								direction: 'rl',
								onCover: function(contentEl, revealerEl) {
									contentEl.style.opacity = 1;
								}
							}
						}),
				    scrollElemToWatch_1 = document.getElementById('rev-1'),
					watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),				
					rev1 = new RevealFx(scrollElemToWatch_1, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev2 = new RevealFx(document.querySelector('#rev-2'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev3 = new RevealFx(document.querySelector('#rev-3'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_2 = document.getElementById('rev-4'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
					rev4 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev5 = new RevealFx(document.querySelector('#rev-5'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev6 = new RevealFx(document.querySelector('#rev-6'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_3 = document.getElementById('rev-7'),
					watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),
					rev7 = new RevealFx(scrollElemToWatch_3, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev8 = new RevealFx(document.querySelector('#rev-8'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev9 = new RevealFx(document.querySelector('#rev-9'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_4 = document.getElementById('rev-10'),
					watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -300),
					rev10 = new RevealFx(scrollElemToWatch_4, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev11 = new RevealFx(document.querySelector('#rev-11'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev12 = new RevealFx(document.querySelector('#rev-12'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_5 = document.getElementById('rev-13'),
					watcher_5 = scrollMonitor.create(scrollElemToWatch_5, -300),
					rev13 = new RevealFx(scrollElemToWatch_5, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev14 = new RevealFx(document.querySelector('#rev-14'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev15 = new RevealFx(document.querySelector('#rev-15'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_6 = document.getElementById('rev-16'),
					watcher_6 = scrollMonitor.create(scrollElemToWatch_6, -300),
					rev16 = new RevealFx(scrollElemToWatch_6, {
						revealSettings : {
							bgcolor: '#987033',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev17 = new RevealFx(document.querySelector('#rev-17'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev18 = new RevealFx(document.querySelector('#rev-18'), {
						revealSettings : {
							bgcolor: '#838D92',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					})
								
				watcher_0.enterViewport(function() {
					rev0.reveal();
					watcher_0.destroy();
				});	
				watcher_1.enterViewport(function() {
					rev1.reveal();
					rev2.reveal();
					rev3.reveal();
					watcher_1.destroy();
				});
				watcher_2.enterViewport(function() {
					rev4.reveal();
					rev5.reveal();
					rev6.reveal();
					watcher_2.destroy();
				});
				watcher_3.enterViewport(function() {
					rev7.reveal();
					rev8.reveal();
					rev9.reveal();
					watcher_3.destroy();
				});
				watcher_4.enterViewport(function() {
					rev10.reveal();
					rev11.reveal();
					rev12.reveal();
					watcher_4.destroy();
				});
				watcher_5.enterViewport(function() {
					rev13.reveal();
					rev14.reveal();
					rev15.reveal();
					watcher_5.destroy();
				});
				watcher_6.enterViewport(function() {
					rev16.reveal();
					rev17.reveal();
					rev18.reveal();
					watcher_6.destroy();
				});
			}
		})();
		
  })(jQuery); 		
		