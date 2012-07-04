(function () {
	ui.modules.Module1 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.declaration = { html: 'none' };
			this.subModulesIndexes = ['Sub2'];

			ui.mediator.on('app-Module2-onInit', function(module){
				that.module2 = module;
			});

			ui.modules.Module1.Super.call(this, options);

			return false;
		},
		getFormatedValue: function() {
			// call method from external module
			return this.module2.getFormatedValue(this.value);
		}
	});
}).apply(ui);
