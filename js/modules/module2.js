(function () {
	ui.modules.Module2 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.declaration = { cls: 'subs' };
			this.subModulesIndexes = ['Sub1', 'Sub2'];

			ui.mediator.on('app-Module1-onValueChange', function(value){
				that.dependedValue = value;
			});

			ui.modules.Module2.Super.call(this, options);

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