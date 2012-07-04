(function () {
	ui.Root = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.index = options && options.index || 'moduleroot-';
			this.value = undefined;
			this.declaration = { };
			this.subModulesIndexes = ['Module1', 'Module2'];

			ui.Root.Super.call(this, options);

			this.defineSubModules();
			this.declaration.items = this.getSubDeclaration();

			return false;
		}
	});
}).apply(ui);
