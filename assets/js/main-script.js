(function ($) {
	'use strict';

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */

	$('#post-thumb, #gallery-post').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000

	});

	$('#features').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$('#navigation').sticky({
		topSpacing: 0
	});

})(jQuery);
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();


/* ========================================================================= */
/*	Smooth Scroll
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*=\'#\']');

function getabout() {
	document.getElementById("about").style.display = "block";
	document.getElementById("services").style.display = "none";
	document.getElementById("team-skills").style.display = "none";
	document.getElementById("counter").style.display = "none";
	document.getElementById("our-team").style.display = "none";
	document.getElementById("contact-us").style.display = "none";
	document.getElementById("more-links").style.display = "none";
}

function getservices() {
	document.getElementById("about").style.display = "none";
	document.getElementById("services").style.display = "block";
	document.getElementById("team-skills").style.display = "none";
	document.getElementById("counter").style.display = "none";
	document.getElementById("our-team").style.display = "none";
	document.getElementById("contact-us").style.display = "none";
	document.getElementById("more-links").style.display = "none";
}

function getteamskills() {
	document.getElementById("about").style.display = "none";
	document.getElementById("services").style.display = "none";
	document.getElementById("team-skills").style.display = "block";
	document.getElementById("counter").style.display = "none";
	document.getElementById("our-team").style.display = "none";
	document.getElementById("contact-us").style.display = "none";
	document.getElementById("more-links").style.display = "none";
}

function getcounter() {
	document.getElementById("about").style.display = "none";
	document.getElementById("services").style.display = "none";
	document.getElementById("team-skills").style.display = "none";
	document.getElementById("counter").style.display = "block";
	document.getElementById("our-team").style.display = "none";
	document.getElementById("contact-us").style.display = "none";
	document.getElementById("more-links").style.display = "none";
}

function getourteam() {
	document.getElementById("about").style.display = "none";
	document.getElementById("services").style.display = "none";
	document.getElementById("team-skills").style.display = "none";
	document.getElementById("counter").style.display = "none";
	document.getElementById("our-team").style.display = "block";
	document.getElementById("contact-us").style.display = "none";
	document.getElementById("more-links").style.display = "none";
}

function getcontact() {
	document.getElementById("about").style.display = "none";
	document.getElementById("services").style.display = "none";
	document.getElementById("team-skills").style.display = "none";
	document.getElementById("counter").style.display = "none";
	document.getElementById("our-team").style.display = "none";
	document.getElementById("contact-us").style.display = "block";
	document.getElementById("more-links").style.display = "none";
}
function getmorelinks() {
	document.getElementById("about").style.display = "none";
	document.getElementById("services").style.display = "none";
	document.getElementById("team-skills").style.display = "none";
	document.getElementById("counter").style.display = "none";
	document.getElementById("our-team").style.display = "none";
	document.getElementById("contact-us").style.display = "none";
	document.getElementById("more-links").style.display = "block";
}

function getcontactformpopup() {
	document.getElementById('getcontactpopup').style.display = "block"
}

let mssbotguilds = "Fetching...";
setInterval(() => {

	try {

		fetch('https://top.gg/api/bots/802868654957789204/stats', {
			headers: {
				"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwMjg2ODY1NDk1Nzc4OTIwNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ5MjI1NDgzfQ.W4ifk1Fb8rC5e2P03gSogI8-Y7OOQIbzSop6ayvd2_M"
			}
		})
			.then(response => response.json())
			.then(data => {
				mssbotguilds = data.server_count
				console.log(mssbotguilds)
			})

	} catch (error) {
		mssbotguilds = error
		console.log(mssbotguilds)
	}

	const span = document.getElementById('botguilds')

	span.textContent = `${mssbotguilds}`

}, 5000)