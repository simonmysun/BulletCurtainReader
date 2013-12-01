var scrollPercent;

var showComment = function(c) {
    $(c).parent().parent().show(150);
}

var hideComment = function(c) {
    $(c).parent().parent().hide(150);
}

var bulletFly = function(b) {
    console.log(b);
    var randHeight = ($(window).scrollTop() + Math.random()*($(window).height() - 200));
    var totWidth = $("#bc-content").width();
    $("#bc-content").append('<div class="bullet" style="top: ' + randHeight + 'px">' + b.html() + '</div>');
    $(".bullet").animate({left:(totWidth / 2) + 'px'},function(){
	$(".bullet").animate({left:(totWidth + 200) + 'px'},function(){
	    $(".bullet").remove();
	});
    });
}

var checkBullet = function() {
    $(".uyan_cmt_txt").each(function(){
	var cmt_loc = parseFloat($(this).html());
	if(cmt_loc >= (scrollPercent - halfPagePercent) && cmt_loc <= (scrollPercent + halfPagePercent)) {
	    showComment(this);
	    bulletFly($(this));
	}
	else {
	    hideComment(this);
	}
	return true;
    });
}

var makeBtn = function() {
    $("#uyan_cmt_btn").attr("onclick",'$("#uyan_comment")[0].value=scrollPercent+"L_"+$("#uyan_comment")[0].value;UYAN.addCmt(this);');    
}

$(window).scroll(function(){
    var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
    scrollPercent = (s / (d - c)) * 100;
    halfPagePercent = (c / d) * 50;
    checkBullet();
    makeBtn();
});

$(document).ready(function(){
    $(window).scroll();
});


