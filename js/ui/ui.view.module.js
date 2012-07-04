(function () {
	ui.view = ui.view || {};
	ui.view.module = my.Class({
		constructor: function(options) {
			var that = this;
			this.declaration = this.declaration || {};
			this.index = options.index || undefined;
			this.type = options.type || undefined;
			this.value = this.value || undefined;
			this.items = {};

			ui.mediator.on(this.index+'-onValueChange', function(){
				that.bindValue();
			});
			ui.mediator.on('app-start', function(){
				that.bindValue();
			});

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
			ui.mediator.fire(this.index+'-onValueChange', this.value);
			return this.declaration;
		},
		setValue: function(value) {
			this.value = value;
			ui.mediator.fire(this.index+'-onValueChange', this.value);
		},
		bindValue: function() {
			if(ui.loaded){
				$('#'+this.index+'-value').html(this.value);
			}
		},
		getValue: function() {
			return this.value;
		}
	});
}).apply(ui);