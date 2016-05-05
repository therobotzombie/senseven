// sticky nav
	$('#nav').affix({
		  offset: {
			top: 0
		  }
	});	
	$('#navbg').affix({
		  offset: {
			top: 75
		  }
	});
	
// back to top link
    if (($(window).height() + 200) < $(document).height()) {
            $('#top-link-block').removeClass('hidden').affix({
                offset: {top: 200}
            });
     }
	 
// tooltips
	$("body").tooltip({ selector:'[data-toggle=tooltip]'});
	
// modals
	$(".modal-fullscreen").on('show.bs.modal', function() {
	 setTimeout( function() {
		$(".modal-backdrop").addClass("modal-backdrop-fullscreen");
		}, 0);
	});
	$(".modal-fullscreen").on('hidden.bs.modal', function () {
		 $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
	});
	
// lazy load
	$("img.lazy").unveil(-100, function() {
	  $(this).load(function() {
		this.style.opacity = 0.8;
	  });
	});
	$("img").error(function () {
		$(this).css('border', 'none');
	});
	
// smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});