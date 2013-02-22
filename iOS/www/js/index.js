/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        var saveButton = document.getElementById('save');
        saveButton.addEventListener('click', this.onSaveClicked);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var saveButton = document.getElementById('save');
        //saveButton.removeAttribute('disabled');
    },
    
    onSaveClicked: function() {
        function fail(error) {
            alert(error.code);
        }
        
        function gotFS(fileSystem) {
            var saveToPath = fileSystem.root.fullPath;
            downloadTo( saveToPath );
        }
        
        function downloadTo(path) {
            var fileTransfer = new FileTransfer();
            var imageUri = 'https://si0.twimg.com/profile_images/2284174758/v65oai7fxn47qv9nectx.png';
            var uri = encodeURI(imageUri);
            
            
            function success() {
                console.log('success');
            }
            
            function fail(err) {
                console.log('fail:err:'+err);
            }
            
            fileTransfer.download(
                                  uri,
                                  path + '/' + Date.now() + '.png',
                                  function(entry) {
                                    console.log("download complete: " + entry.fullPath);
                                    window.plugins.SaveToPhotoAlbum.saveToPhotoAlbum( success, fail, entry.fullPath );
                                  },
                                  function(error) {
                                    console.log("download error source " + error.source);
                                    console.log("download error target " + error.target);
                                    console.log("upload error code" + error.code);
                                  }
                                  );
        }
        
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        
        
    }
};
