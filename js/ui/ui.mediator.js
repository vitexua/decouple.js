(function () {
	ui.mediator = {};
	_.extend(ui.mediator, Backbone.Events);

	_.extend(ui.mediator, {
		fire: function() {
			if(!arguments[0] || !arguments[1]) {
				return false;
			}

			if(typeof arguments[0] == 'object') {
				if(!arguments[2]) {
					return false;
				}
				var module = arguments[0],
					moduleIndex = module.index + '-' + arguments[1],
					moduleType;
				if(module.type) {
					moduleType = module.type + '-' + arguments[1];
				}

				// trigger event for current module
				ui.mediator.trigger.apply(this, [moduleIndex, arguments[2]]);

				// trigger event for all modules by same type
				if(moduleType) {
					ui.mediator.trigger.apply(this, [moduleType, arguments[2]]);
				}
			} else {
				// for support original arguments
				ui.mediator.trigger.apply(this, arguments);
			}

			return true;
		}
	});

}).apply(ui);