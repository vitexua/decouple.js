(function () {

	var modules = [];

	_.each(ui.modules, function(Module){
		modules.push(new Module());
	});

	_.each(modules, function(module){
		module.init();
	});

	_.each(modules, function(module, i){
		module.setValue(i ? 'abc' : 'zxc');
	});

	_.each(modules, function(module){
		console.log('debug: '+module.index+' declaration', module.declaration);
	});

	_.each(modules, function(module){
		console.log('debug: '+module.index+' get value', module.getValue());
		console.log('debug: '+module.index+' get depended value', module.getDependedValue());
	});

}).apply(ui);