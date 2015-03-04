$(document).ready(function(){

//flipping card animation
    $('.flip').click(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });
//scrolling down animation
    $("#knowUsTag").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#knowUs").offset().top
    	}, 500);
	});

	$("#worshipTag").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#worship").offset().top
    	}, 500);
	});

	$("#joinGroupTag").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#joinGroup").offset().top
    	}, 500);
	});

	$("#treeTag").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#tree").offset().top
    	}, 500);
	});
});

