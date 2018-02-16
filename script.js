$(document).ready(function(){
	/*sidebar left side menu*/
	$('.button_left').click(function(){
		$('#side_bar_left_fixed').animate({
			'width':'toggle',
			'opacity': '0.9'
		}).css('display','block');

	});
	/*sidebar right side menu*/
	$('.button_right').click(function(){
		if( $('#side_bar_right_fixed').css('margin-left') == '300px' )
		$('#side_bar_right_fixed').animate({
			'display':'block',
			'margin-left':'0px',
			'width':'toggle',
			'opacity': '0.9'
		});
		else  $('#side_bar_right_fixed').animate({
			'display':'none',
			'margin-left':'300px',
			'width':'toggle',
			'opacity': '0.9'
		});
	});

});