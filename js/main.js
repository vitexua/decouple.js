(function () {

	var modules = [];

	window.root = new ui.Root({
		index: 'app'
	});
	window.root.init();

	console.log(root.getDeclaration());

}).apply(ui);