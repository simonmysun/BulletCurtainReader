var scrollPercent;

$(window).scroll(function(){
    var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
    
    scrollPercent = (s / (d - c)) * 100;

    halfPagePercent = (c / d) * 50;

    $(".uyan_cmt_txt").each(function(){
	var cmt_loc = parseFloat($(this).html());
	if(cmt_loc >= (scrollPercent - halfPagePercent) && cmt_loc <= (scrollPercent + halfPagePercent)) {
	    $(this).parent().parent().fadeIn();
	}
	else {
	    $(this).parent().parent().fadeOut();
	}
	return true;
    });

    //console.log("Current scroll percent range: [", (scrollPercent - halfPagePercent), (scrollPercent + halfPagePercent)),"]";

});


$("#uyan_cmt_btn").attr("onclick",'$("#uyan_comment")[0].value=scrollPercent+"L_"+$("#uyan_comment")[0].value;UYAN.addCmt(this);');
