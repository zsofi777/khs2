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
						bgcolor: '#838D92',
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev1.reveal();

				var rev2 = new RevealFx(document.querySelector('#rev-load-2'), {
					revealSettings : {
						bgcolor: '#B79B70',
						delay: 250,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev2.reveal();


				//************************ reveal on scroll ********************************

				var	scrollElemToWatch_2 = document.getElementById('rev-4'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
					rev4 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev5 = new RevealFx(document.querySelector('#rev-5'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev6 = new RevealFx(document.querySelector('#rev-6'), {
						revealSettings : {
							bgcolor: '#B79B70',
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
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev8 = new RevealFx(document.querySelector('#rev-8'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev9 = new RevealFx(document.querySelector('#rev-9'), {
						revealSettings : {
							bgcolor: '#B79B70',
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
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev11 = new RevealFx(document.querySelector('#rev-11'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev12 = new RevealFx(document.querySelector('#rev-12'), {
						revealSettings : {
							bgcolor: '#B79B70',
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
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev14 = new RevealFx(document.querySelector('#rev-14'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev15 = new RevealFx(document.querySelector('#rev-15'), {
						revealSettings : {
							bgcolor: '#B79B70',
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
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev17 = new RevealFx(document.querySelector('#rev-17'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev18 = new RevealFx(document.querySelector('#rev-18'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_7 = document.getElementById('rev-19'),
					watcher_7 = scrollMonitor.create(scrollElemToWatch_7, -300),
					rev19 = new RevealFx(scrollElemToWatch_7, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev20 = new RevealFx(document.querySelector('#rev-20'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev21 = new RevealFx(document.querySelector('#rev-21'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_8 = document.getElementById('rev-22'),
					watcher_8 = scrollMonitor.create(scrollElemToWatch_8, -300),
					rev22 = new RevealFx(scrollElemToWatch_8, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev23 = new RevealFx(document.querySelector('#rev-23'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev24 = new RevealFx(document.querySelector('#rev-24'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_9 = document.getElementById('rev-25'),
					watcher_9 = scrollMonitor.create(scrollElemToWatch_9, -300),
					rev25 = new RevealFx(scrollElemToWatch_9, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev26 = new RevealFx(document.querySelector('#rev-26'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev27 = new RevealFx(document.querySelector('#rev-27'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_10 = document.getElementById('rev-28'),
					watcher_10 = scrollMonitor.create(scrollElemToWatch_10, -300),
					rev28 = new RevealFx(scrollElemToWatch_10, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev29 = new RevealFx(document.querySelector('#rev-29'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev30 = new RevealFx(document.querySelector('#rev-30'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_11 = document.getElementById('rev-31'),
					watcher_11 = scrollMonitor.create(scrollElemToWatch_11, -300),
					rev31 = new RevealFx(scrollElemToWatch_11, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev32 = new RevealFx(document.querySelector('#rev-32'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev33 = new RevealFx(document.querySelector('#rev-33'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_12 = document.getElementById('rev-34'),
					watcher_12 = scrollMonitor.create(scrollElemToWatch_12, -300),
					rev34 = new RevealFx(scrollElemToWatch_12, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev35 = new RevealFx(document.querySelector('#rev-35'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev36 = new RevealFx(document.querySelector('#rev-36'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_13 = document.getElementById('rev-37'),
					watcher_13 = scrollMonitor.create(scrollElemToWatch_13, -300),
					rev37 = new RevealFx(scrollElemToWatch_13, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev38 = new RevealFx(document.querySelector('#rev-38'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev39 = new RevealFx(document.querySelector('#rev-39'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_14 = document.getElementById('rev-40'),
					watcher_14 = scrollMonitor.create(scrollElemToWatch_14, -300),
					rev40 = new RevealFx(scrollElemToWatch_14, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev41 = new RevealFx(document.querySelector('#rev-41'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev42 = new RevealFx(document.querySelector('#rev-42'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_15 = document.getElementById('rev-43'),
					watcher_15 = scrollMonitor.create(scrollElemToWatch_15, -300),
					rev43 = new RevealFx(scrollElemToWatch_15, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev44 = new RevealFx(document.querySelector('#rev-44'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev45 = new RevealFx(document.querySelector('#rev-45'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_16 = document.getElementById('rev-46'),
					watcher_16 = scrollMonitor.create(scrollElemToWatch_16, -300),
					rev46 = new RevealFx(scrollElemToWatch_16, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_17 = document.getElementById('rev-47'),
					watcher_17 = scrollMonitor.create(scrollElemToWatch_17, -200),
					rev47 = new RevealFx(scrollElemToWatch_17, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_18 = document.getElementById('rev-48'),
					watcher_18 = scrollMonitor.create(scrollElemToWatch_18, -200),
					rev48 = new RevealFx(scrollElemToWatch_18, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_19 = document.getElementById('rev-49'),
					watcher_19 = scrollMonitor.create(scrollElemToWatch_19, -300),
					rev49 = new RevealFx(scrollElemToWatch_19, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev50 = new RevealFx(document.querySelector('#rev-50'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev51 = new RevealFx(document.querySelector('#rev-51'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_20 = document.getElementById('rev-52'),
					watcher_20 = scrollMonitor.create(scrollElemToWatch_20, -300),
					rev52 = new RevealFx(scrollElemToWatch_20, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_21 = document.getElementById('rev-53'),
					watcher_21 = scrollMonitor.create(scrollElemToWatch_21, -300),
					rev53 = new RevealFx(scrollElemToWatch_21, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					})
					

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
				watcher_7.enterViewport(function() {
					rev19.reveal();
					rev20.reveal();
					rev21.reveal();
					watcher_7.destroy();
				});
				watcher_8.enterViewport(function() {
					rev22.reveal();
					rev23.reveal();
					rev24.reveal();
					watcher_8.destroy();
				});
				watcher_9.enterViewport(function() {
					rev25.reveal();
					rev26.reveal();
					rev27.reveal();
					watcher_9.destroy();
				});
				watcher_10.enterViewport(function() {
					rev28.reveal();
					rev29.reveal();
					rev30.reveal();
					watcher_10.destroy();
				});
				watcher_11.enterViewport(function() {
					rev31.reveal();
					rev32.reveal();
					rev33.reveal();
					watcher_11.destroy();
				});
				watcher_12.enterViewport(function() {
					rev34.reveal();
					rev35.reveal();
					rev36.reveal();
					watcher_12.destroy();
				});
				watcher_13.enterViewport(function() {
					rev37.reveal();
					rev38.reveal();
					rev39.reveal();
					watcher_13.destroy();
				});
				watcher_14.enterViewport(function() {
					rev40.reveal();
					rev41.reveal();
					rev42.reveal();
					watcher_14.destroy();
				});
				watcher_15.enterViewport(function() {
					rev43.reveal();
					rev44.reveal();
					rev45.reveal();
					watcher_15.destroy();
				});	
				watcher_16.enterViewport(function() {
					rev46.reveal();
					watcher_16.destroy();
				});	
				watcher_17.enterViewport(function() {
					rev47.reveal();
					watcher_17.destroy();
				});	
				watcher_18.enterViewport(function() {
					rev48.reveal();
					watcher_18.destroy();
				});	
				watcher_19.enterViewport(function() {
					rev49.reveal();
					rev50.reveal();
					rev51.reveal();
					watcher_19.destroy();
				});
				watcher_20.enterViewport(function() {
					rev52.reveal();
					watcher_20.destroy();
				});	
				watcher_21.enterViewport(function() {
					rev53.reveal();
					watcher_21.destroy();
				});	
			}
		})();
		
  })(jQuery); 		
		