$(function() {
	
	var slider = $('.my-slider').unslider({arrows: {
		//  Unslider default behaviour
		prev: '<a class="slide_arrow_prev"></a>',
		next: '<a class="slide_arrow_next"></a>'
	}});
	slider.on('unslider.ready', function() {
	});
	//  Listen to slide changes
	slider.on('unslider.change', function(event, index, slide) {
		//alert('Slide has been changed to ' + index);
	});
	
	var pageSlider = $('.page_slider').children().eq(0);
	pageSlider.children().eq(1).hide();
	pageSlider.children().eq(2).hide();
	
	var pageSelector = $('#contentselectorcontent');
	pageSelector.children().eq(0).on("click",function(){
		//alert($(this).attr("title"));
	
	pageSlider.children().eq(0).fadeIn();	
	pageSlider.children().eq(1).hide();
	pageSlider.children().eq(2).hide();
	
	pageSelector.children().eq(0).css({'background':'#c31b3f'});	
	pageSelector.children().eq(1).css({'background':'#ca7944'});
	pageSelector.children().eq(2).css({'background':'#ca7944'});
	});
	pageSelector.children().eq(1).on("click",function(){
		//alert($(this).attr("title"));
	
	pageSlider.children().eq(0).hide();	
	pageSlider.children().eq(1).fadeIn();
	pageSlider.children().eq(2).hide();
	
	pageSelector.children().eq(0).css({'background':'#ca7944'});	
	pageSelector.children().eq(1).css({'background':'#c31b3f'});
	pageSelector.children().eq(2).css({'background':'#ca7944'});
	});
	pageSelector.children().eq(2).on("click",function(){
		//alert($(this).attr("title"));
	
	pageSlider.children().eq(0).hide();	
	pageSlider.children().eq(1).hide();
	pageSlider.children().eq(2).fadeIn();
	
	pageSelector.children().eq(0).css({'background':'#ca7944'});	
	pageSelector.children().eq(1).css({'background':'#ca7944'});
	pageSelector.children().eq(2).css({'background':'#c31b3f'});
	});
});