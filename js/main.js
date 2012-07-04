(function () {

	$(function() {

		var modules = [];

		window.root = new ui.Root({
			index: 'app'
		});
		window.root.init();

		var _html = '';
		function buildHTML(obj) {
			if(obj.html) {
				_html += obj.html;
			}
			_.each(obj.items, function(item) {
				buildHTML(item);
			});
			return _html;
		}

		var _declaration = root.getDeclaration(),
			rootHTML = buildHTML(_declaration);

		$('#declaration').html(rootHTML);

		ui.loaded = true;

		ui.mediator.trigger('app-start');

	});

}).apply(ui);