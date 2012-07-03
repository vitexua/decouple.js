(function () {

	var modules = [];

	_.each(ui.modules, function(Module, i){
		modules.push(new Module());
		modules.push(new Module({index: 'module_A'+i}));
	});

	_.each(modules, function(module){
		module.init();
	});

	_.each(modules, function(module, i){
		module.setValue('val'+i);
	});

	_.each(modules, function(module){
		console.log('debug: '+module.index+' declaration', module.declaration);
	});

	_.each(modules, function(module){
		console.log('debug: '+module.index+' get value', module.getValue());
		console.log('debug: '+module.index+' get depended value', module.getDependedValue());
		console.log('debug: '+module.index+' get formated value', module.getFormatedValue());
	});

}).apply(ui);