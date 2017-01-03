/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";
	/* global google: false */
	/*-------------------------------------------------*/
	/* =  Top section
	/*-------------------------------------------------*/

	var windowHeight = $(window).height(),
		topSection = $('#home-section');
	topSection.css('height', windowHeight);

	$(window).resize(function(){
		var windowHeight = $(window).height();
		topSection.css('height', windowHeight);
	});

	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/
	try {

		var SliderPost = $('.flexslider');

		SliderPost.flexslider({
			animation: "fade"
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.portfolio-container');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					masonry: {
						columnWidth: 1,
						isAnimated: true,
						itemSelector: '.blog-post'
					},
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});


				$('.triggerAnimation').waypoint(function() {
					var animation = $(this).attr('data-animate');
					$(this).css('opacity', '');
					$(this).addClass("animated " + animation);

				},
					{
						offset: '80%',
						triggerOnce: true
					}
				);

			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').click(function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});
	/*-------------------------------------------------*/
	/* =  preloader function
	/*-------------------------------------------------*/
	winDow.load( function(){
		var mainDiv = $('#container'),
			preloader = $('.preloader');

			preloader.fadeOut(400, function(){
				mainDiv.delay(400).addClass('active');
			});
	});

	/*-------------------------------------------------*/
	/* =  smooth scroll in chrome
	/*-------------------------------------------------*/
	try {
		$.browserSelector();
		// Adds window smooth scroll on chrome.
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  parallax
	/*-------------------------------------------------*/
	
	try{
		$('#testimonial-section, #tweet-section').appear(function() {	
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 0
			});
		});
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* =  Testimonial
	/*-------------------------------------------------*/
	try{
		var testimUl = $('.testimonial > ul');

		testimUl.quovolver({
			transitionSpeed:300,
			autoPlay:true
		});
	}catch(err){
	}

	/*-------------------------------------------------*/
	/* =  count increment
	/*-------------------------------------------------*/
	try {
		$('.statistic-post').appear(function() {
			$('.timer').countTo({
				speed: 4000,
				refreshInterval: 60
			});
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  navbar collapse menu
	/*-------------------------------------------------*/
	try {
		$(".navbar-nav li a").click(function(event) {
			$(".navbar-collapse").collapse('hide');
		});
	} catch(err) {

	}
	
	/*-------------------------------------------------*/
	/* =  Animated content
	/*-------------------------------------------------*/

	try {
		/* ================ ANIMATED CONTENT ================ */
		if ($(".animated")[0]) {
			$('.animated').css('opacity', '0');
		}

		$('.triggerAnimation').waypoint(function() {
			var animation = $(this).attr('data-animate');
			$(this).css('opacity', '');
			$(this).addClass("animated " + animation);

		},
			{
				offset: '80%',
				triggerOnce: true
			}
		);
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	var contact = {"lat":"-37.818751", "lon":"144.961062"}; //Change a map coordinate here!, 

	try {
		var mapContainer = $('.map');
		mapContainer.gmap3({
			action: 'addMarker',
			marker:{
				options:{
					//icon : new google.maps.MarkerImage('images/marker.png')
				}
			},
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 17
				},
			},
			{action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image'
		});
	} catch(err) {

	}

	try {
		var magnLink = $('.page');
		magnLink.magnificPopup({
			closeBtnInside:true
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* = slider Testimonial
	/*-------------------------------------------------*/

	var slidertestimonial = $('.bxslider');
	try{		
		slidertestimonial.bxSlider({
			mode: 'horizontal'
		});
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* = video background
	/*-------------------------------------------------*/

	try{
		jQuery(".player").mb_YTPlayer();
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* =  Carosells
	/*-------------------------------------------------*/
	try {
		$('.carousel').carousel({
			interval: false
		});
	} catch(err) {

	}
});