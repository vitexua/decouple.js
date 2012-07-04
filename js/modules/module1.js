(function () {
	ui.modules.Module1 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;

			this.subModulesIndexes = ['Sub2'];
			this.value = 123;

			ui.mediator.on('app-Module2-onInit', function(module){
				that.module2 = module;
			});

			ui.modules.Module1.Super.call(this, options);

			this.declaration = { html: '<div>Module1 value: <span id="'+this.index+'-value"></span></div>' };

			return false;
		},
		getFormatedValue: function() {
			// call method from external module
			return this.module2.getFormatedValue(this.value);
		}
	});
}).apply(ui);