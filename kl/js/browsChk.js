var checkWidth = function() {
	var browserWidth = $(window).width();
	var $body = jQuery('body');

	setsize('uiWeb');

	if(browserWidth <= 757){
		 setsize('uiMobile');
	}else{
		$body.removeClass().addClass('uiWeb');
	}
};

var setsize = function(size) {
	var $body = jQuery('body');
	jQuery('body').removeClass('uiWeb uiMobile uiPad').addClass(size);

};

jQuery(document).ready(function() {
	checkWidth();
	$(window).resize(checkWidth);
});