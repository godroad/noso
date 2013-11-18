// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// This is a single context application with multiple windows in a stack
(function() {

var win = Ti.UI.createWindow({
	fullscreen : false,
	navBarHidden : true,
	title : '主页1',
	exitOnClose : true
});


var HeadBar = require('HeadBar');
var headBar = new HeadBar('true', 'head bar');

win.add(headBar);

// var MenuView = require('MenuView');
// var menuView = new MenuView();
// 
// win.add(menuView);

var TabUnder = require('tabUnder');
var tabUnder = new TabUnder();



win.add(tabUnder);

win.open();

})();
