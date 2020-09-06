
	function setFontSize(fontSize) {
		saveSettings('fontSize', fontSize);
		$('html').removeClass('fs-small fs-normal fs-big').addClass(fontSize);
	}
	
	function setColorSite(color) {
		saveSettings('color', color);
		$('html').removeClass('color1 color2 color3 color4 color5').addClass(color);
	}
	
	function setFontFamily(fontFamily) {
		saveSettings('fontFamily', fontFamily);
		$('html').removeClass('serif sans-serif').addClass(fontFamily);
	}
	
	function setSpacing(letterSpace) {
		saveSettings('letterSpace', letterSpace);
		$('html').removeClass('spacing-normal spacing-big spacing-small').addClass(letterSpace);
	}
	
	function setImageVisible(showImgs) {
		saveSettings('showImgs', showImgs);
		$('html').removeClass('imagesoff imageson').addClass(showImgs);
		$('.a-images a').attr('rel', (showImgs=='imagesoff')?'imageson':'imagesoff');
	}

	function setNormal(normalVer) {
		saveSettings('normalVer', normalVer);
		$('html').removeClass('specialversion normalvesion').addClass(normalVer);
	}
	
	function setDefSpecialSettings() {
		setColorSite('color1');
		setFontFamily('sans-serif');
		setFontSize('fs-normal');
		setSpacing('spacing-small');
		setNormal('specialversion');
		setImageVisible('imageson');
	}

	function setNormalMode() {
		setColorSite(def_settings.color);
		setFontFamily(def_settings.fontFamily);
		setFontSize(def_settings.fontSize);
		setSpacing(def_settings.letterSpace);
		setNormal(def_settings.normalVer);
		setImageVisible(def_settings.showImgs);
	}
	
	function setUserSettings() {
		var getSettings = { 
			color:			$.cookie('color') || window.def_settings.color,
			fontFamily:		$.cookie('fontFamily') || window.def_settings.fontFamily,
			fontSize:		$.cookie('fontSize') || window.def_settings.fontSize,
			letterSpace:	$.cookie('letterSpace') || window.def_settings.letterSpace,
			normalVer:		$.cookie('normalVer') || window.def_settings.normalVer,
			showImgs:		$.cookie('showImgs') || window.def_settings.showImgs
		};
		setColorSite(getSettings.color);
		setFontFamily(getSettings.fontFamily);
		setFontSize(getSettings.fontSize);
		setSpacing(getSettings.letterSpace);
		setNormal(getSettings.normalVer);
		setImageVisible(getSettings.showImgs);
	}
	
	function saveSettings(name, value) {
		$.cookie(name, value, { expires: 2*365, path: '/', secure: false });
	}
	
	
$(document).ready(function(){
	window.def_settings = {
			color:			'',
			fontFamily:		'',
			fontSize:		'',
			letterSpace:	'',
			normalVer:		'normalvesion',
			showImgs:		'imageson'
		};
	setUserSettings();
	
	$('.choose-font-family a').click(function(){
		setFontFamily($(this).data('set'));
		return false;
	});
	$('.choose-letter-spacing a').click(function(){
		setSpacing($(this).data('set'));
		return false;
	});
	$('.a-images a').click(function(){
		setImageVisible($(this).data('set'));
		return false;
	});

	$('.a-fontsize a').click(function(){
		setFontSize($(this).data('set'));
		return false;
	});
	$('.a-colors a, .choose-colors a').click(function(){
		setColorSite($(this).data('set'));
		return false;
	});

	$('.a-settings a,.saveit .closepopped').click(function(){
	$('.popped').slideToggle('fast');
		return false;
	});

	$('.saveit .default, #specialversion').click(function(){
		setDefSpecialSettings();
		return false;
	});

	$('#normalversion').click(function(){
		setNormalMode($(this).data('set'));
		return false;
	});
  
});