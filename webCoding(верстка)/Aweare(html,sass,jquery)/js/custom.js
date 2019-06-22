$(function(){

    $('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		let id = $(this).attr('href');
		$(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false;
		
    });
    
    $('.accordion__head').on('click', function(){
		let el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		
    });
    
    $('.styler').styler();

    $( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 20, 300 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] );
			$( "#amount1" ).val( "$" + ui.values[ 1 ] );
		}
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount1" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
});

   


