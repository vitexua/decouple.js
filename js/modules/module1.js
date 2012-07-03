(function () {
	var Module1 = my.Class({
		constructor: function(options) {
			var that = this;
			this.index = 'module1-';
			this.value = undefined;
			this.declaration = { html: '1' };

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
			return this.value + ' ' + this.dependedValue;
		}
	});
	ui.modules.Module1 = Module1;
}).apply(ui);
