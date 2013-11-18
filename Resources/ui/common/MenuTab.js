function MenuTab() {
	var scrollView = Ti.UI.createScrollView({
		top: 0,
		height: '85%',	
		backgroudColor : '#000'
	});

	function dpToPixel(dp) {
		return (parseInt(dp) * (Titanium.Platform.displayCaps.dpi / 160));
	}

	// convert pixel to dp.
	function pixelToDp(px) {
		return (parseInt(px) / (Titanium.Platform.displayCaps.dpi / 160)) + 'dp';
	}

	var gap = dpToPixel('7dp');

	var menubg11 = Ti.UI.createImageView({top : gap,left : gap,width : dpToPixel('150dp'),height : dpToPixel('150dp')});
	menubg11.image='/images/message1.png';
	scrollView.add(menubg11);
	
	var menu11 = Ti.UI.createLabel({top : gap,left : gap,width : dpToPixel('150dp'),height : dpToPixel('150dp')});
	scrollView.add(menu11);

	var Register = require('/ui/common/register/RegisterMain');
	var register = new Register();
	menu11.addEventListener('click', function() {
		// alert('click');
		register.open();
	});

	var menu12 = Ti.UI.createImageView({
		top : gap,
		left : menu11.left + menu11.width + gap,
		width : dpToPixel('150dp'),
		height : dpToPixel('70dp')
	});
	
	menu12.image='/images/mail1.png';
	scrollView.add(menu12);

	var menu21 = Ti.UI.createImageView({
		top : menu11.top + menu11.height + gap,
		left : gap,
		width : dpToPixel('150dp'),
		height : dpToPixel('70dp')
	});

	menu21.image='/images/mail2.png';
	scrollView.add(menu21);

	var menu22 = Ti.UI.createImageView({
		top : menu12.top + menu12.height + gap,
		left : menu21.left + menu21.width + gap,
		width : dpToPixel('150dp'),
		height : dpToPixel('150dp')
	});
	
	menu22.image='/images/message2.png';
	scrollView.add(menu22);

	var menu31 = Ti.UI.createImageView({
		top : menu21.top + menu21.height + gap,
		left : gap,
		width : dpToPixel('150dp'),
		height : dpToPixel('150dp')
	});
	
	menu31.image='/images/message3.png';
	scrollView.add(menu31);

	var menu32 = Ti.UI.createImageView({
		top : menu21.top + menu21.height + gap,
		left : menu31.left + menu31.width + gap,
		width : dpToPixel('150dp'),
		height : dpToPixel('70dp')
	});
	
	menu32.image='/images/mail3.png';
	scrollView.add(menu32);

	var menu41 = Ti.UI.createImageView({
		top : menu31.top + menu31.height + gap,
		left : gap,
		width : dpToPixel('150dp'),
		height : dpToPixel('150dp')
	});

	menu41.image='/images/message4.png';
	scrollView.add(menu41);

	return scrollView;
}

module.exports = MenuTab;