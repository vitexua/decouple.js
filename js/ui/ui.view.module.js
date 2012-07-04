(function () {
	ui.view = ui.view || {};
	ui.view.module = my.Class({
		constructor: function(options) {
			var that = this;
			this.declaration = {};
			this.index = options.index || undefined;
			this.type = options.type || undefined;
			this.value = undefined;
			this.dependedValue = undefined;
			this.items = {};

			this.defineSubModules();

			return false;
		},
		getDeclaration: function() {
			var items = this.getSubDeclaration();
			if(items && items.length) {
				this.declaration.items = items;
			}
			ui.mediator.fire(this, 'onDeclaration', this.declaration);
			this.declaration.index = this.index;
			this.declaration.type = this.type;
			return this.declaration;
		},
		getSubDeclaration: function() {
			var items = [];
			_.each(this.items, function(module){
				items.push(module.getDeclaration());
			});
			return items;
		},
		defineSubModules: function() {
			var that = this;
			_.each(this.subModulesIndexes, function(moduleIndex){
				that.items[moduleIndex] = new ui.modules[moduleIndex]({
					parent: that,
					index: that.index + '-' + moduleIndex,
					type: moduleIndex
				});
			});
		},
		init: function(options) {
			_.each(this.items, function(module) {
				module.init();
			});
			ui.mediator.fire(this.index+'-onInit', this);
			return this.declaration;
		},
		setValue: function(value) {
			this.value = value;
			ui.mediator.fire(this.index+'-onValueChange', this.value);
		},
		getValue: function() {
			return this.value;
		},
		getDependedValue: function() {
			// use data from external module
			return this.value + ' ' + this.dependedValue;
		},
		getFormatedValue: function(value) {
			return this.formatValue(value || this.value);
		}
	});
}).apply(ui);