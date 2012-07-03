(function () {
	var Module2 = my.Class({
		constructor: function(options) {
			var that = this;
			this.index = 'module2-';
			this.value = undefined;
			this.declaration = { html: '2' };

			ui.mediator.on('module1-onDeclaration', function(declaration){
				that.updateDeclaration(declaration);
			});
			ui.mediator.on('module1-onValueChange', function(value){
				that.dependedValue = value;
			});

			return false;
		},
		updateDeclaration: function(declaration) {
			if(!declaration) {return false;}
			var _items = [];
			_items.push(declaration);
			_items.push(this.declaration);
			this.declaration = {
				items: _items
			};
		},
		init: function(options) {
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
			return this.value + ' ' + this.dependedValue;
		}
	});
	ui.modules.Module2 = Module2;
}).apply(ui);