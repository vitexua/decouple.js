(function () {
	ui.modules.Sub1 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.declaration = { html: 'sub1' };

			ui.mediator.on('app-Module1-onValueChange', function(value){
				that.dependedValue = value;
			});

			ui.modules.Sub1.Super.call(this, options);

			return false;
		},
		getValue: function() {
			return this.value + ' ' + this.dependedValue;
		}
	});
}).apply(ui);