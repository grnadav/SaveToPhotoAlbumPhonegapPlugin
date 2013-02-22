package org.apache.cordova.plugin;

import java.io.FileNotFoundException;
import java.net.URI;
import java.net.URISyntaxException;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;

import android.provider.MediaStore;

public class SaveToPhotoAlbumPlugin extends CordovaPlugin {

	private static final String SAVE = "saveToPhotoAlbum";

	/**
     * Executes the request and returns if action was valid.
     *
     * @param action        	The action to execute.
     * @param args          	JSONArray of arguments for the plugin.
     * @param callbackContext   The callback used when calling back into JavaScript.
     * @return              	Boolean - false if action invalid\not recognized, else true
     */
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        
        if (action.equals(SAVE)) {
            String uri = args.optString(0);
            this.saveToAlbum(uri);
            callbackContext.success();
        } else {
        	callbackContext.error("Invalid Action");
            return false;
        }
        
        return true;
    }

	private void saveToAlbum(String uri)  {
		try {
			MediaStore.Images.Media.insertImage(this.cordova.getActivity().getContentResolver(), new URI(uri).getPath(), "Imagerio" , "Photo taken at Imagerio");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
	}
}
