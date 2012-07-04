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


		// TEST
		root.items.Module2.setValue('test');
		root.items.Module1.setValue('mod1');
		root.items.Module1.items.Sub2.setValue('done');
		root.items.Module2.items.Sub1.setValue('sm1');
		root.items.Module2.items.Sub2.setValue('sm2');

	});

}).apply(ui);