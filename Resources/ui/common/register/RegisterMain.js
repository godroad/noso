function RegisterMain() {
	//create module instance
	var win = Ti.UI.createWindow();

	var win2 = Ti.UI.createView({
        title : 'win1'
    });

    win2.add(Ti.UI.createLabel({
        text : 'first win'
    }));
	
	win.add(win2);
	
	return win;
}

module.exports = RegisterMain;
