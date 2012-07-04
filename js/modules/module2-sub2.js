(function () {
	ui.modules.Sub2 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;

			ui.modules.Sub2.Super.call(this, options);

			this.declaration = { html: '<div>sub2 value: <span id="'+this.index+'-value"></span></div>' };
			return false;
		}
	});
}).apply(ui);