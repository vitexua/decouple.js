(function () {
	ui.Root = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.subModulesIndexes = ['Module1', 'Module2'];

			ui.Root.Super.call(this, options);

			return false;
		}
	});
}).apply(ui);
