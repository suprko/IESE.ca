$(document).ready(function() {

	$.fn.checkImgRatio = function() {
		var imgContainerRatio = this.width() / this.height();
		var imgRatio = $(this).find('img').width() / $(this).find('img').height();

		if (imgRatio >= imgContainerRatio) {
			this.removeClass('fill-height');
			this.addClass('fill-width');
		}
		if (imgRatio < imgContainerRatio) {
			this.removeClass('fill-width');
			this.addClass('fill-height');
		}
	}

	$('.background').checkImgRatio();

	$(window).resize(function() {
		$('.background').checkImgRatio();
	});
});
