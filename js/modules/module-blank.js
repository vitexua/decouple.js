(function () {
	var ModuleBlank = my.Class({
		constructor: function(options) {
			this.index = 'blank-';
			return false;
		},
		init: function(options) {
			ui.mediator.trigger(this.index+'onInit', this);
			return this;
		}
	});
	ui.modules.ModuleBlank = ModuleBlank;
}).apply(ui);