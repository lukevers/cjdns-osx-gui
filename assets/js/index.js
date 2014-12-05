var BindClickInstall = function() {
	$('#install').bind('click', function(e) {
		$('body').load('bodies/install.html', function(er) {
			loc = 'install';
		});
	});
}
