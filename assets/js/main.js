// "loc" takes the first route
var loc = window.location.href.split('/').slice(-1);

$(function() {
	Load();
});

var Load = function() {
	switch (loc.toString())
	{
		case 'index.html':
			BindClickInstall();
			break;
		case 'install':
			break;
		default:
			break;
	}
};
