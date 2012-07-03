(function () {
	var Module1 = my.Class({
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

			return false;
		},
		init: function(options) {
			ui.mediator.trigger(this.index+'onInit', this);
			ui.mediator.trigger(this.index+'onDeclaration', this.declaration);
			return this.declaration;
		},
		setValue: function(value) {
			this.value = value;
			ui.mediator.trigger(this.index+'onValueChange', this.value);
		},
		getValue: function() {
			return this.value;
		},
		getDependedValue: function() {
			// use data from external module
			return this.value + ' ' + this.dependedValue;
		},
		getFormatedValue: function() {
			// call method from external module
			return this.module2.getFormatedValue(this.value);
		}
	});
	ui.modules.Module1 = Module1;
}).apply(ui);
