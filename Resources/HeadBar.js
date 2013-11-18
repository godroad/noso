/**
 * @author 柚子
 */
function HeadBar(navi, title) {
	
	var self = Ti.UI.createView({
		top : 0,
		left : 0,
		width : '100%',
		height : '7%',
		backgroundImage : "images/headbar.png",
		title: 'title'
	});

	var titleLab = Ti.UI.createLabel({
	text : title,
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	font : {
		fontSize : 34,
	},
	color : 'black'
	});
	
	self.add(titleLab);
	
	return self;	
}
	module.exports = HeadBar;