(function () {
	ui.modules.Module2 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.subModulesIndexes = ['Sub1', 'Sub2'];

			ui.modules.Module2.Super.call(this, options);

			ui.mediator.on('app-Module2-Sub2-onValueChange', function(value){
				that.setValue(that.value + value);
			});
			ui.mediator.on('app-Module2-Sub1-onValueChange', function(value){
				that.setValue(that.value + value);
			});

			this.declaration = { html: '<div>Module2 value: <span id="'+this.index+'-value"></span></div>' };

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