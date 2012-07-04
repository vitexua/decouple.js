(function () {
	ui.modules.Module1 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.declaration = { html: 'none' };

			ui.mediator.on('module2-onInit', function(module){
				that.module2 = module;
				console.log('module2 init');
			});
			ui.mediator.on('module1-onInit', function(module){
				console.log('module1 init');
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
