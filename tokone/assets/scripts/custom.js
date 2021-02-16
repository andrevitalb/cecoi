var wi, newHeight;

$(window).resize(function() {
	if($(window).width() >= 991){
		wi = $("#prod_1").width();
		newHeight  = wi * 1.5;
		$(".prods").height(newHeight);

		wi = $("#prod_4").width();
		newHeight  = wi * .75;
		$(".prods_hor").height(newHeight);
	}
});

$(window).trigger('resize');