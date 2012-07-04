(function () {
	ui.modules.Sub1 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;

			ui.mediator.on('app-Module1-onValueChange', function(value){
				that.setValue(value);
			});

			ui.modules.Sub1.Super.call(this, options);

			this.declaration = { html: '<div>sub1 value: <span id="'+this.index+'-value"></span></div>' };

			return false;
		},
		getValue: function() {
			return this.value + ' ' + this.dependedValue;
		}
	});
}).apply(ui);