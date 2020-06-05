(function($) {

	"use strict";

	// Intro Anim	 
    $(window).on('load', function() {

        // Load anim fade out
    	$("#loader").fadeOut("slow", function(){
	        // Main div fade out
	        $("#preloader").delay(300).fadeOut("slow");
      	}); 

        // Intro animation
     	if (!$("html").hasClass('no-cssanimations')) {
     		setTimeout(function(){
    			$('body .animate-intro').each(function(ctr) {
					var el = $(this),
                  	animationEfx = el.data('animate');

               		if (animationEfx === null || animationEfx === undefined || animationEfx.trim() === "") {
                 		animationEfx = "fadeInUp";
               		}

              		setTimeout( function () {
						el.addClass(animationEfx + ' animated');
					}, ctr * 100);
				});
			}, 1000);
     	}
  	});

	// Hiding Logo	 
    $(window).on('scroll', function() {
		var y = $(window).scrollTop(),
		    siteHeader = $('header'),
		    siteLogo = siteHeader.find('.logo'),
		    triggerHeight = siteHeader.innerHeight();
	   	if (y > triggerHeight) {
	    	siteLogo.fadeOut();	     
	   	}
      	else {
        	siteLogo.fadeIn();
      	}
	});


	/* ------------------------------------------------------
	 * Fitvids
	 * ------------------------------------------------------ */ 	
  	$(".fluid-video-wrapper").fitVids();


	/* ------------------------------------------------------
	 * Flexslider
	 * ------------------------------------------------------ */
  	$(window).on('load', function() {

	   $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: ".flexslider-controls",
	      animation: "fade",
		  	manualControls: ".flex-control-nav li",	     
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      touch: true,
	      useCSS: false, // Chrome fix
	      start: function(slider){
			   $(slider).trigger('resize');  	
			}			
	   });

   });


	/* ------------------------------------------------------
	 * Mobile Menu
	 * ------------------------------------------------------ */
   var toggleButton = $('.menu-toggle'),
       nav = $('#menu-nav-wrap'),
       siteBody = $('body'),
       mainContents = $('#main-content-wrap, header');

	// open-close menu by clicking on the menu icon
	toggleButton.on('click', function(e){

		e.preventDefault();

		toggleButton.toggleClass('is-clicked');
		siteBody.toggleClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, 
			// so we need to wait for the end of the trasition to give the body an overflow hidden
			siteBody.toggleClass('overflow-hidden');
		});
			
		// check if transitions are not supported 
		if ($('html').hasClass('no-csstransitions')) {
			 siteBody.toggleClass('overflow-hidden');
		}

	});

	// close menu clicking outside the menu itself
	mainContents.on('click', function(e){

		if( !$(e.target).is('.menu-toggle, .menu-toggle span') ) {

			toggleButton.removeClass('is-clicked');
			siteBody.removeClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				siteBody.removeClass('overflow-hidden');
			});
			
			// check if transitions are not supported
			if ($('html').hasClass('no-csstransitions')) {
				 siteBody.removeClass('overflow-hidden');
			}
		}

	});


	/* ------------------------------------------------------
	 * Stat Counter
	 * ------------------------------------------------------ */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();  

		},			
		offset: "90%"
	
	});


  /* ------------------------------------------------------
	* Highlight the current section in the navigation bar
	* ------------------------------------------------------ */
	var sections = $("section"),
	navigationLinks = $("#menu-nav-wrap .nav-list a");	

	sections.waypoint( {

      handler: function(direction) {

		   var activeSection;

			activeSection = $('section#' + $(this.element).attr("id"));

			if (direction === "up") activeSection = activeSection.prev();

			var activeLink = $('#menu-nav-wrap .nav-list a[href="#' + activeSection.attr("id") + '"]');			

         navigationLinks.parent().removeClass("current");
			activeLink.parent().addClass("current");

		},
		offset: '25%'
	});


  /* ------------------------------------------------------
	* Smooth Scrolling
	* ------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing').promise().done(function () {

      	// check if menu is open
      	if ($('body').hasClass('menu-is-open')) {
				$('.menu-toggle').trigger('click');
			}

      	window.location.hash = target;
      });

  	});


  /* ------------------------------------------------------
	* Placeholder Plugin Settings
	* ------------------------------------------------------ */
	$('input, textarea, select').placeholder()  


	/* ------------------------------------------------------
	* Animations
	* ------------------------------------------------------ */
	if (!$("html").hasClass('no-cssanimations')) {

		$('.animate-this').waypoint({

			handler: function(direction) {

				var defAnimationEfx = "fadeInUp";

				if ( direction === 'down' && !$(this.element).hasClass('animated')) {

					$(this.element).addClass('item-animate');

					setTimeout(function() {

						$('body .animate-this.item-animate').each(function(ctr) {

							var el = $(this),
		                  animationEfx = el.data('animate');

		               if (animationEfx === null || animationEfx === undefined || animationEfx.trim() === "") {
		                 	animationEfx = defAnimationEfx;
		               }

		              	setTimeout( function () {
								el.addClass(animationEfx + ' animated');
								el.removeClass('item-animate');
							}, ctr * 50);

						});
							
					}, 500);

				}

				// trigger once only
       		this.destroy();  

			}, 
			offset: '95%'

		}); 
	} 

  /* ------------------------------------------------------
	* Back to Top
	* ------------------------------------------------------ */
	var pxShow = 300,      // height on which the button will show
	    fadeInTime = 400,  // how slow/fast you want the button to show
	    fadeOutTime = 400, // how slow/fast you want the button to hide
       scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
       goTopButton = $("#go-top") 

	// Show or hide the sticky footer button
	$(window).on('scroll', function() {

		if ($(window).scrollTop() >= pxShow) {
			goTopButton.fadeIn(fadeInTime);
		} else {
			goTopButton.fadeOut(fadeOutTime);
		}

	});
 

})(jQuery);