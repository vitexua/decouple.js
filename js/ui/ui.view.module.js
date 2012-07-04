(function () {
	ui.view = ui.view || {};
	ui.view.module = my.Class({
		constructor: function(options) {
			var that = this;
			this.value = undefined;
			this.dependedValue = undefined;
			this.subModules = {};

			return false;
		},
		getDeclaration: function() {
			return this.declaration;
		},
		getSubDeclaration: function() {
			var items = [];
			_.each(this.subModules, function(module){
				items.push(module.getDeclaration());
			});
			return items;
		},
		defineSubModules: function() {
			var that = this;
			_.each(this.subModulesIndexes, function(moduleIndex){
				that.subModules[moduleIndex] = new ui.modules[moduleIndex]({ parent: that });
			});
		},
		init: function(options) {
			_.each(this.subModules, function(module) {
				module.init();
			});
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
		formatValue: function(value) {
			return '['+value+']';
		},
		getFormatedValue: function(value) {
			return this.formatValue(value || this.value);
		}
	});
}).apply(ui);