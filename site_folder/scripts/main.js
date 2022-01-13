/*
 * Url preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit https://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 
this.screenshotPreview = function(){	
	/* CONFIG */
		
		xOffset = 10;
		yOffset = 30;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$("a.screenshot").hover(function(e){
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='screenshot'><img src='"+ this.rel +"' alt='url preview' />"+ c +"</p>");								 
		$("#screenshot")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		this.title = this.t;	
		$("#screenshot").remove();
    });	
	$("a.screenshot").mousemove(function(e){
		$("#screenshot")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};


// starting the script on page load
$(document).ready(function(){
	screenshotPreview();
});

/*********MODAL HANDLER**********/
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});

var modal = document.querySelector('#openModal');

/*

// Handle click on the modal container
modal.addEventListener('click', closeModal, false);

// Prevent event bubbling if click occurred within modal content body
modal.children[0].addEventListener('click', function(e) {
    e.stopPropagation();
}, false);


/****************ANIM STOP*************/
$(document).ready (function () {
  $('#hvr-forward').hover (function (){
      $('#hvr-forward').removeClass('hover');
      $(this).addClass('hover');            
  });
})  

$(document).ready (function () {
  $('#hvr-backward').hover (function (){
      $('#hvr-backward').removeClass('hover');
      $(this).addClass('hover');            
  });
})
