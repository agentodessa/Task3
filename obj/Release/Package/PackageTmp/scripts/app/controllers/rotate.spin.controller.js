var app= app|| {};
(function(app) {
	app.rotateStart =function () {
		$('.wrap_spinner').css("display", "block");
		$("#maintain").css('display', 'none');
		$('.spinner').animate({ rotate: '360' }, 1000, 'linear', function () {
			$('.wrap_spinner').css('display', 'none');
			$("#maintain").css('display', 'block');
		});

	};


	app.rotateStop = function () {
		$('.wrap_spinner').css('display', 'none');
		$('.spinner').animate().stop();
	}
})(app)