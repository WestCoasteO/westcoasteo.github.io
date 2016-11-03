$(document).ready(function(){
	 $(function(){
      // SyntaxHighlighter.all();
    });
    $(window).load(function(){
		$('.carousel').each(function(){
      $(this).flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 243.5,
        itemMargin: 0,
        asNavFor: '#'+$(this).attr('data')
      });
		
		});
    $('.carousel li').on('mouseover',function(){
        $(this).trigger('click');
    });
$('.sliders').each(function(){
	      $(this).flexslider({
        animation: "fade",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        touch: true,
        sync: "#"+$(this).attr('data'),
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
});

    });
  
	
	
})
	
	
	
