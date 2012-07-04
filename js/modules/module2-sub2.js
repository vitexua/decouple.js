(function () {
	ui.modules.Sub2 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.declaration = { html: 'sub2' };

			ui.modules.Sub2.Super.call(this, options);

			return false;
		}
	});
}).apply(ui);