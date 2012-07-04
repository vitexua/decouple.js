(function () {
	ui.modules.Module2 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.index = options && options.index || 'module2-';
			this.value = undefined;
			this.declaration = { cls: 'subs' };
			this.subModulesIndexes = ['Module2Sub1', 'Module2Sub2'];

			ui.mediator.on('module1-onValueChange', function(value){
				that.dependedValue = value;
			});

			ui.modules.Module2.Super.call(this, options);

			this.defineSubModules();
			this.declaration.items = this.getSubDeclaration();

			return false;
		},
		formatValue: function(value) {
			return '['+value+']';
		},
		getFormatedValue: function(value) {
			return this.formatValue(value || this.value);
		}
	});
}).apply(ui);