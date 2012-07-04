(function () {
	ui.modules.Module1 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.index = options && options.index || 'module1-';
			this.value = undefined;
			this.declaration = { html: '1' };

			ui.mediator.on('module2-onInit', function(module){
				that.module2 = module;
			});
			ui.mediator.on('module2-onValueChange', function(value){
				that.dependedValue = value;
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
