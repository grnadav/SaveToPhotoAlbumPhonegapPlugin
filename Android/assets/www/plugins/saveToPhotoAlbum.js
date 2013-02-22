(function(cordova) {

/**
 * Constructor
 */
function SaveToPhotoAlbum() {}


SaveToPhotoAlbum.prototype.saveToPhotoAlbum = function(successCallback, failCallback, uri) {
    console.log('SaveToPhotoAlbum.js: saveToPhotoAlbum: uri:' + uri);
    if (!uri) {
    	if (typeof failCallback === 'function') {
    		failCallback('uri not provided');
    	}
    	return;
    }
    
	cordova.exec(
        successCallback,
        failCallback,
        "SaveToPhotoAlbum",
        "saveToPhotoAlbum",
        [uri]
    );
};

/**
 * Install function
 */
SaveToPhotoAlbum.install = function() {
	if ( !window.plugins ) {
		window.plugins = {};
	} 
	if ( !window.plugins.SaveToPhotoAlbum ) {
		window.plugins.SaveToPhotoAlbum = new SaveToPhotoAlbum();
	}
};

/**
 * Add to Cordova constructor
 */
if (cordova && cordova.addConstructor) {
	cordova.addConstructor(SaveToPhotoAlbum.install);
} else {
	console.log("SaveToPhotoAlbum Cordova Plugin could not be installed.");
	return null;
}

})(window.PhoneGap || window.Cordova || window.cordova);
