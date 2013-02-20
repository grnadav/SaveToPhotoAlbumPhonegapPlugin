//
//  SaveToPhotoAlbum.m
//  SaveToPhotoAlbumPlugin
//
//  Created by Nadav Greenberg on 2/20/13.
//
//

#import "SaveToPhotoAlbum.h"

@implementation SaveToPhotoAlbum

- (void) saveToPhotoAlbum:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options {
    NSString* callbackId = [arguments pop];
    NSString* path = [arguments objectAtIndex:0];
    
    UIImage *image = [[[UIImage alloc] initWithContentsOfFile:path] autorelease];
    
    //Now it will do this for each photo in the array
    UIImageWriteToSavedPhotosAlbum(image, nil, nil, nil);
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self writeJavascript: [pluginResult toSuccessCallbackString:callbackId]];
}


@end
