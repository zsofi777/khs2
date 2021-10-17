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

				var	scrollElemToWatch_0 = document.getElementById('rev-0'),
					watcher_0 = scrollMonitor.create(scrollElemToWatch_0, -100),
					rev0 = new RevealFx(scrollElemToWatch_0, {
						revealSettings : {
							bgcolor: '#838D92',
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
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev2 = new RevealFx(document.querySelector('#rev-2'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev3 = new RevealFx(document.querySelector('#rev-3'), {
						revealSettings : {
							bgcolor: '#B79B70',
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
							delay: 500,
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
					rev47 = new RevealFx(document.querySelector('#rev-47'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev48 = new RevealFx(document.querySelector('#rev-48'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_17 = document.getElementById('rev-49'),
					watcher_17 = scrollMonitor.create(scrollElemToWatch_17, -300),
					rev49 = new RevealFx(scrollElemToWatch_17, {
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
							delay: 500,
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
					scrollElemToWatch_18 = document.getElementById('rev-52'),
					watcher_18 = scrollMonitor.create(scrollElemToWatch_18, -300),
					rev52 = new RevealFx(scrollElemToWatch_18, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev53 = new RevealFx(document.querySelector('#rev-53'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev54 = new RevealFx(document.querySelector('#rev-54'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_19 = document.getElementById('rev-55'),
					watcher_19 = scrollMonitor.create(scrollElemToWatch_19, -300),
					rev55 = new RevealFx(scrollElemToWatch_19, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev56 = new RevealFx(document.querySelector('#rev-56'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev57 = new RevealFx(document.querySelector('#rev-57'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_20 = document.getElementById('rev-58'),
					watcher_20 = scrollMonitor.create(scrollElemToWatch_20, -300),
					rev58 = new RevealFx(scrollElemToWatch_20, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev59 = new RevealFx(document.querySelector('#rev-59'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev60 = new RevealFx(document.querySelector('#rev-60'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_21 = document.getElementById('rev-61'),
					watcher_21 = scrollMonitor.create(scrollElemToWatch_21, -300),
					rev61 = new RevealFx(scrollElemToWatch_21, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev62 = new RevealFx(document.querySelector('#rev-62'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev63 = new RevealFx(document.querySelector('#rev-63'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_22 = document.getElementById('rev-64'),
					watcher_22 = scrollMonitor.create(scrollElemToWatch_22, -300),
					rev64 = new RevealFx(scrollElemToWatch_22, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev65 = new RevealFx(document.querySelector('#rev-65'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev66 = new RevealFx(document.querySelector('#rev-66'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_23 = document.getElementById('rev-67'),
					watcher_23 = scrollMonitor.create(scrollElemToWatch_23, -300),
					rev67 = new RevealFx(scrollElemToWatch_23, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev68 = new RevealFx(document.querySelector('#rev-68'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev69 = new RevealFx(document.querySelector('#rev-69'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_24 = document.getElementById('rev-70'),
					watcher_24 = scrollMonitor.create(scrollElemToWatch_24, -300),
					rev70 = new RevealFx(scrollElemToWatch_24, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev71 = new RevealFx(document.querySelector('#rev-71'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev72 = new RevealFx(document.querySelector('#rev-72'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_25 = document.getElementById('rev-73'),
					watcher_25 = scrollMonitor.create(scrollElemToWatch_25, -300),
					rev73 = new RevealFx(scrollElemToWatch_25, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev74 = new RevealFx(document.querySelector('#rev-74'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev75 = new RevealFx(document.querySelector('#rev-75'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_26 = document.getElementById('rev-76'),
					watcher_26 = scrollMonitor.create(scrollElemToWatch_26, -300),
					rev76 = new RevealFx(scrollElemToWatch_26, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev77 = new RevealFx(document.querySelector('#rev-77'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev78 = new RevealFx(document.querySelector('#rev-78'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_27 = document.getElementById('rev-79'),
					watcher_27 = scrollMonitor.create(scrollElemToWatch_27, -300),
					rev79 = new RevealFx(scrollElemToWatch_27, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev80 = new RevealFx(document.querySelector('#rev-80'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev81 = new RevealFx(document.querySelector('#rev-81'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_28 = document.getElementById('rev-82'),
					watcher_28 = scrollMonitor.create(scrollElemToWatch_28, -300),
					rev82 = new RevealFx(scrollElemToWatch_28, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev83 = new RevealFx(document.querySelector('#rev-83'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev84 = new RevealFx(document.querySelector('#rev-84'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_29 = document.getElementById('rev-85'),
					watcher_29 = scrollMonitor.create(scrollElemToWatch_29, -300),
					rev85 = new RevealFx(scrollElemToWatch_29, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev86 = new RevealFx(document.querySelector('#rev-86'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev87 = new RevealFx(document.querySelector('#rev-87'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_30 = document.getElementById('rev-88'),
					watcher_30 = scrollMonitor.create(scrollElemToWatch_30, -300),
					rev88 = new RevealFx(scrollElemToWatch_30, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev89 = new RevealFx(document.querySelector('#rev-89'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev90 = new RevealFx(document.querySelector('#rev-90'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_31 = document.getElementById('rev-91'),
					watcher_31 = scrollMonitor.create(scrollElemToWatch_31, -300),
					rev91 = new RevealFx(scrollElemToWatch_31, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev92 = new RevealFx(document.querySelector('#rev-92'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev93 = new RevealFx(document.querySelector('#rev-93'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_32 = document.getElementById('rev-94'),
					watcher_32 = scrollMonitor.create(scrollElemToWatch_32, -300),
					rev94 = new RevealFx(scrollElemToWatch_32, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev95 = new RevealFx(document.querySelector('#rev-95'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev96 = new RevealFx(document.querySelector('#rev-96'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_33 = document.getElementById('rev-97'),
					watcher_33 = scrollMonitor.create(scrollElemToWatch_33, -300),
					rev97 = new RevealFx(scrollElemToWatch_33, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev98 = new RevealFx(document.querySelector('#rev-98'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev99 = new RevealFx(document.querySelector('#rev-99'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_34 = document.getElementById('rev-100'),
					watcher_34 = scrollMonitor.create(scrollElemToWatch_34, -300),
					rev100 = new RevealFx(scrollElemToWatch_34, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev101 = new RevealFx(document.querySelector('#rev-101'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev102 = new RevealFx(document.querySelector('#rev-102'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_35 = document.getElementById('rev-103'),
					watcher_35 = scrollMonitor.create(scrollElemToWatch_35, -300),
					rev103 = new RevealFx(scrollElemToWatch_35, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev104 = new RevealFx(document.querySelector('#rev-104'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev105 = new RevealFx(document.querySelector('#rev-105'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_36 = document.getElementById('rev-106'),
					watcher_36 = scrollMonitor.create(scrollElemToWatch_36, -300),
					rev106 = new RevealFx(scrollElemToWatch_36, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev107 = new RevealFx(document.querySelector('#rev-107'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev108 = new RevealFx(document.querySelector('#rev-108'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_37 = document.getElementById('rev-109'),
					watcher_37 = scrollMonitor.create(scrollElemToWatch_37, -300),
					rev109 = new RevealFx(scrollElemToWatch_37, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev110 = new RevealFx(document.querySelector('#rev-110'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev111 = new RevealFx(document.querySelector('#rev-111'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_38 = document.getElementById('rev-112'),
					watcher_38 = scrollMonitor.create(scrollElemToWatch_38, -300),
					rev112 = new RevealFx(scrollElemToWatch_38, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev113 = new RevealFx(document.querySelector('#rev-113'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev114 = new RevealFx(document.querySelector('#rev-114'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_39 = document.getElementById('rev-115'),
					watcher_39 = scrollMonitor.create(scrollElemToWatch_39, -300),
					rev115 = new RevealFx(scrollElemToWatch_39, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev116 = new RevealFx(document.querySelector('#rev-116'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev117 = new RevealFx(document.querySelector('#rev-117'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_40 = document.getElementById('rev-118'),
					watcher_40 = scrollMonitor.create(scrollElemToWatch_40, -300),
					rev118 = new RevealFx(scrollElemToWatch_40, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev119 = new RevealFx(document.querySelector('#rev-119'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev120 = new RevealFx(document.querySelector('#rev-120'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_41 = document.getElementById('rev-121'),
					watcher_41 = scrollMonitor.create(scrollElemToWatch_41, -300),
					rev121 = new RevealFx(scrollElemToWatch_41, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev122 = new RevealFx(document.querySelector('#rev-122'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev123 = new RevealFx(document.querySelector('#rev-123'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_42 = document.getElementById('rev-124'),
					watcher_42 = scrollMonitor.create(scrollElemToWatch_42, -300),
					rev124 = new RevealFx(scrollElemToWatch_42, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev125 = new RevealFx(document.querySelector('#rev-125'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev126 = new RevealFx(document.querySelector('#rev-126'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_43 = document.getElementById('rev-127'),
					watcher_43 = scrollMonitor.create(scrollElemToWatch_43, -300),
					rev127 = new RevealFx(scrollElemToWatch_43, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev128 = new RevealFx(document.querySelector('#rev-128'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev129 = new RevealFx(document.querySelector('#rev-129'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_44 = document.getElementById('rev-130'),
					watcher_44 = scrollMonitor.create(scrollElemToWatch_44, -300),
					rev130 = new RevealFx(scrollElemToWatch_44, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev131 = new RevealFx(document.querySelector('#rev-131'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev132 = new RevealFx(document.querySelector('#rev-132'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_45 = document.getElementById('rev-133'),
					watcher_45 = scrollMonitor.create(scrollElemToWatch_45, -300),
					rev133 = new RevealFx(scrollElemToWatch_45, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev134 = new RevealFx(document.querySelector('#rev-134'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev135 = new RevealFx(document.querySelector('#rev-135'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_46 = document.getElementById('rev-136'),
					watcher_46 = scrollMonitor.create(scrollElemToWatch_46, -300),
					rev136 = new RevealFx(scrollElemToWatch_46, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev137 = new RevealFx(document.querySelector('#rev-137'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev138 = new RevealFx(document.querySelector('#rev-138'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_47 = document.getElementById('rev-139'),
					watcher_47 = scrollMonitor.create(scrollElemToWatch_47, -300),
					rev139 = new RevealFx(scrollElemToWatch_47, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev140 = new RevealFx(document.querySelector('#rev-140'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev141 = new RevealFx(document.querySelector('#rev-141'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_48 = document.getElementById('rev-142'),
					watcher_48 = scrollMonitor.create(scrollElemToWatch_48, -300),
					rev142 = new RevealFx(scrollElemToWatch_48, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev143 = new RevealFx(document.querySelector('#rev-143'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev144 = new RevealFx(document.querySelector('#rev-144'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_49 = document.getElementById('rev-145'),
					watcher_49 = scrollMonitor.create(scrollElemToWatch_49, -300),
					rev145 = new RevealFx(scrollElemToWatch_49, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev146 = new RevealFx(document.querySelector('#rev-146'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev147 = new RevealFx(document.querySelector('#rev-147'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_50 = document.getElementById('rev-148'),
					watcher_50 = scrollMonitor.create(scrollElemToWatch_50, -300),
					rev148 = new RevealFx(scrollElemToWatch_50, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev149 = new RevealFx(document.querySelector('#rev-149'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev150 = new RevealFx(document.querySelector('#rev-150'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_51 = document.getElementById('rev-151'),
					watcher_51 = scrollMonitor.create(scrollElemToWatch_51, -300),
					rev151 = new RevealFx(scrollElemToWatch_51, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev152 = new RevealFx(document.querySelector('#rev-152'), {
						revealSettings : {
							bgcolor: '#4B7793',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev153 = new RevealFx(document.querySelector('#rev-153'), {
						revealSettings : {
							bgcolor: '#B79B70',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					


					scrollElemToWatch_52 = document.getElementById('rev-991'),
					watcher_52 = scrollMonitor.create(scrollElemToWatch_52, -100),
					rev991 = new RevealFx(scrollElemToWatch_52, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_53 = document.getElementById('rev-992'),
					watcher_53 = scrollMonitor.create(scrollElemToWatch_53, -100),
					rev992 = new RevealFx(scrollElemToWatch_53, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					scrollElemToWatch_54 = document.getElementById('rev-993'),
					watcher_54 = scrollMonitor.create(scrollElemToWatch_54, -100),
					rev993 = new RevealFx(scrollElemToWatch_54, {
						revealSettings : {
							bgcolor: '#838D92',
							direction: 'rl',
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
					rev47.reveal();
					rev48.reveal();
					watcher_16.destroy();
				});
				watcher_17.enterViewport(function() {
					rev49.reveal();
					rev50.reveal();
					rev51.reveal();
					watcher_17.destroy();
				});
				watcher_18.enterViewport(function() {
					rev52.reveal();
					rev53.reveal();
					rev54.reveal();
					watcher_18.destroy();
				});
				watcher_19.enterViewport(function() {
					rev55.reveal();
					rev56.reveal();
					rev57.reveal();
					watcher_19.destroy();
				});
				watcher_20.enterViewport(function() {
					rev58.reveal();
					rev59.reveal();
					rev60.reveal();
					watcher_20.destroy();
				});
				watcher_21.enterViewport(function() {
					rev61.reveal();
					rev62.reveal();
					rev63.reveal();
					watcher_21.destroy();
				});
				watcher_22.enterViewport(function() {
					rev64.reveal();
					rev65.reveal();
					rev66.reveal();
					watcher_22.destroy();
				});
				watcher_23.enterViewport(function() {
					rev67.reveal();
					rev68.reveal();
					rev69.reveal();
					watcher_23.destroy();
				});
				watcher_24.enterViewport(function() {
					rev70.reveal();
					rev71.reveal();
					rev72.reveal();
					watcher_24.destroy();
				});
				watcher_25.enterViewport(function() {
					rev73.reveal();
					rev74.reveal();
					rev75.reveal();
					watcher_25.destroy();
				});
				watcher_26.enterViewport(function() {
					rev76.reveal();
					rev77.reveal();
					rev78.reveal();
					watcher_26.destroy();
				});
				watcher_27.enterViewport(function() {
					rev79.reveal();
					rev80.reveal();
					rev81.reveal();
					watcher_27.destroy();
				});
				watcher_28.enterViewport(function() {
					rev82.reveal();
					rev83.reveal();
					rev84.reveal();
					watcher_28.destroy();
				});
				watcher_29.enterViewport(function() {
					rev85.reveal();
					rev86.reveal();
					rev87.reveal();
					watcher_29.destroy();
				});
				watcher_30.enterViewport(function() {
					rev88.reveal();
					rev89.reveal();
					rev90.reveal();
					watcher_30.destroy();
				});
				watcher_31.enterViewport(function() {
					rev91.reveal();
					rev92.reveal();
					rev93.reveal();
					watcher_31.destroy();
				});
				watcher_32.enterViewport(function() {
					rev94.reveal();
					rev95.reveal();
					rev96.reveal();
					watcher_32.destroy();
				});
				watcher_33.enterViewport(function() {
					rev97.reveal();
					rev98.reveal();
					rev99.reveal();
					watcher_33.destroy();
				});
				watcher_34.enterViewport(function() {
					rev100.reveal();
					rev101.reveal();
					rev102.reveal();
					watcher_34.destroy();
				});
				watcher_35.enterViewport(function() {
					rev103.reveal();
					rev104.reveal();
					rev105.reveal();
					watcher_35.destroy();
				});
				watcher_36.enterViewport(function() {
					rev106.reveal();
					rev107.reveal();
					rev108.reveal();
					watcher_36.destroy();
				});
				watcher_37.enterViewport(function() {
					rev109.reveal();
					rev110.reveal();
					rev111.reveal();
					watcher_37.destroy();
				});
				watcher_38.enterViewport(function() {
					rev112.reveal();
					rev113.reveal();
					rev114.reveal();
					watcher_38.destroy();
				});
				watcher_39.enterViewport(function() {
					rev115.reveal();
					rev116.reveal();
					rev117.reveal();
					watcher_39.destroy();
				});
				watcher_40.enterViewport(function() {
					rev118.reveal();
					rev119.reveal();
					rev120.reveal();
					watcher_40.destroy();
				});
				watcher_41.enterViewport(function() {
					rev121.reveal();
					rev122.reveal();
					rev123.reveal();
					watcher_41.destroy();
				});
				watcher_42.enterViewport(function() {
					rev124.reveal();
					rev125.reveal();
					rev126.reveal();
					watcher_42.destroy();
				});
				watcher_43.enterViewport(function() {
					rev127.reveal();
					rev128.reveal();
					rev129.reveal();
					watcher_43.destroy();
				});
				watcher_44.enterViewport(function() {
					rev130.reveal();
					rev131.reveal();
					rev132.reveal();
					watcher_44.destroy();
				});
				watcher_45.enterViewport(function() {
					rev133.reveal();
					rev134.reveal();
					rev135.reveal();
					watcher_45.destroy();
				});
				watcher_46.enterViewport(function() {
					rev136.reveal();
					rev137.reveal();
					rev138.reveal();
					watcher_46.destroy();
				});
				watcher_47.enterViewport(function() {
					rev139.reveal();
					rev140.reveal();
					rev141.reveal();
					watcher_47.destroy();
				});
				watcher_48.enterViewport(function() {
					rev142.reveal();
					rev143.reveal();
					rev144.reveal();
					watcher_48.destroy();
				});
				watcher_49.enterViewport(function() {
					rev145.reveal();
					rev146.reveal();
					rev147.reveal();
					watcher_49.destroy();
				});
				watcher_50.enterViewport(function() {
					rev148.reveal();
					rev149.reveal();
					rev150.reveal();
					watcher_50.destroy();
				});
				watcher_51.enterViewport(function() {
					rev151.reveal();
					rev152.reveal();
					rev153.reveal();
					watcher_51.destroy();
				});
				watcher_52.enterViewport(function() {
					rev991.reveal();
					watcher_52.destroy();
				});
				watcher_53.enterViewport(function() {
					rev992.reveal();
					watcher_53.destroy();
				});
				watcher_54.enterViewport(function() {
					rev993.reveal();
					watcher_54.destroy();
				});				
			}
		})();
		
  })(jQuery); 		
		