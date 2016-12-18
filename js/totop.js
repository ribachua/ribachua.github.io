(function($) {
	// When to show the scroll link
	// higher number = scroll link appears further down the page
	var upperLimit = 1000;

	// Our scroll link element
	var scrollElem = $('#totop');

	// Scroll to top speed
	var scrollSpeed = 500;

	// Show and hide the scroll to top link based on scroll position
	scrollElem.hide();
    
    //mobile
	$(document).scroll(function () {
        console.log("ddddd");
		var scrollTop = $(document).scrollTop();
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in
		}else{
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});

    //pc
    $('#container').scroll(function () {
        console.log("dddddcontainer");
		var scrollTop = $('#container').scrollTop();
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in
		}else{
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});
       
	// Scroll to top animation on click
	$(scrollElem).click(function(){
		$('html, body').animate({scrollTop:0}, scrollSpeed); 
        $('#container').animate({scrollTop:0}, scrollSpeed); return false;
	});
         
    
})(jQuery);

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
