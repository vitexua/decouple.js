(function () {
	ui.Root = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.declaration = { };
			this.subModulesIndexes = ['Module1', 'Module2'];

			ui.Root.Super.call(this, options);

			this.defineSubModules();

			return false;
		}
	});
}).apply(ui);
