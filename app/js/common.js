$(function() {

	
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 300
	}) ;	

	var owl = $(".slider");

	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",

	});


	$(".owl-next").click(function(){
		owl.trigger('next.owl.carousel');
	});

	$(".owl-prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-callback .success ").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".form-callback .success ").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	

});
