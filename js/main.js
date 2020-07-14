/* =================================
------------------------------------
	Cryptocurrency - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.responsive-bar').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	
	/*------------------
		Review
	--------------------*/
	// var review_meta = $(".review-meta-slider");
    // var review_text = $(".review-text-slider");


    // review_text.on('changed.owl.carousel', function(event) {
	// 	review_meta.trigger('next.owl.carousel');
	// });

	// review_meta.owlCarousel({
	// 	loop: true,
	// 	nav: false,
	// 	dots: true,
	// 	items: 3,
	// 	center: true,
	// 	margin: 20,
	// 	autoplay: true,
	// 	mouseDrag: false,
	// });


	// review_text.owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	dots: false,
	// 	items: 1,
	// 	margin: 20,
	// 	autoplay: true,
	// 	navText: ['<i class="ti-angle-left"><i>', '<i class="ti-angle-right"><i>'],
	// 	animateOut: 'fadeOutDown',
    // 	animateIn: 'fadeInDown',
	// });



	 /*------------------
		Contact Form
	--------------------*/
    $(".check-form").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".check-form").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });


})(jQuery);

// Scrol to top button

let mybutton = document.getElementById("TopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
	mybutton.style.display = "block";
  } else {
	mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('body, html').animate({scrollTop: 0}, 'EaseinOutQuad');
}

 //smooth scroll
  // handle links with @href started with '#' only
  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;
    

    // animated top scrolling
    $('body, html').animate({scrollTop: pos},'slow','easeInOutQuad');
  });

