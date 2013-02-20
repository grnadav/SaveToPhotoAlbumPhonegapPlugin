//
//  SaveToPhotoAlbum.h
//  SaveToPhotoAlbumPlugin
//
//  Created by Nadav Greenberg on 2/20/13.
//
//

#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>


@interface SaveToPhotoAlbum : CDVPlugin {
}

- (void) saveToPhotoAlbum:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end
