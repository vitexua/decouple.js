(function () {
	ui.modules.Module2Sub1 = my.Class(ui.view.module, {
		constructor: function(options) {
			var that = this;
			this.index = options && options.index || 'module2-sub1';
			this.value = undefined;
			this.declaration = { html: 'sub1' };

			ui.modules.Module2Sub1.Super.call(this, options);

			return false;
		}
	});
}).apply(ui);