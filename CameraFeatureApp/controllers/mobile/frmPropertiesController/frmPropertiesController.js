define({ 
  /**
			 * @function featureSelected
			 * @description navigates to selected feature
			 */
  featureSelected:function(){
    try{
      var formToBeNavigated = null;

      switch(this.view.segFeatureOptions.selectedRowIndex[1]){
        case 0:	formToBeNavigated = "frmBasicCamera";
          data = [
      								{
                                  "APIName" : "Basic Camera",
                                  "Description" : "Basic Camera showcases the base64 and rawBytes property of the Camera widget. You can capture, encode, and store any image in RawBytes or Base64 format by using the base64 and rawBytes properties.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Base64 and RawBytes property*/<label><br><label style=color:#f2f1f1>/*<br>@function assignToImage<br>@description assigns the captured picture to image widget using base64 property and rawBytes property<br>@param cameraObject- eventObject which holds captured image data<br>@defined in the frmBasicCameraController<br>*/</label><br><br><label style=color:#ffffff>assignToImage:function(cameraObject){<br>var rawbytes  = cameraObject.rawBytes;<br>this.view.imgRawbytes.rawBytes=rawbytes;<br>var bse64 = kony.convertToBase64(rawbytes);<br>this.view.imgBase64.base64=bse64;<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Camera_Properties.htm"> Basic Camera </a><br>'
                                }
    							]; 
          break;
        case 1:	formToBeNavigated = "frmcameraOverlay";
          data = [
      								{
                                  "APIName" : "Camera with overlay",
                                  "Description" : "Camera with Form Overlay showcases the enableOverlay property of the Camera widget.<br> You can over-lay any Form UI over the camera view finder by using the enableOverlay property. ",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Camera Overlay*/<label><br><label style=color:#f2f1f1>/*<br>@This property is set through IDE, It can also be configurable from code as well, code follows:*/</label><br><br><label style=color:#ffffff>this.view.CamPrivate.enableOverlay=true;<br>this.view.CamPrivate.overlayConfig={<br>"captureButtonSkin": "camSkinBlue",<br>"captureButtonText": "Capture",<br>"startVideoButtonText": "",<br>"stopVideoButtonText": "",<br>"overlayForm": "frmCameraOverlaid",<br>"tapAnywhere": false<br>};<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Camera_Properties.htm"> Camera with overlay </a><br>'
                                }
    							]; 
          break;
        case 2:	formToBeNavigated = "frmAccessModes";
          data = [
      								{
                                  "APIName" : "Camera Access Mode",
                                  "Description" : "Camera Access Modes showcases the accessMode property of the Camera widget. You can specify how the image can be stored onto your device and specify the accessibility of the image with other applications by using is property. You can store the image in three ways<br><b>Public Mode: </b>In Public mode the captured image is stored on the device and is accessible to all the applications on the device.<br><b>Private Mode: </b>In Private mode the captured image is stored on the device and is not accessible to any other application on the device.<br><b>InMemory Mode: </b>In InMemory mode the captured image is stored in memory and is never written to the disk.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Camera Access Mode*/<label><br><label style=color:#f2f1f1>/*<br>@This property is set through IDE, It can also be configurable from code as well, code follows:*/</label><br><label style=color:#ffffff>this.view.CameraId.accessMode=constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC;<br>this.view.CameraId.accessMode=constants.CAMERA_IMAGE_ACCESS_MODE_PRIVATE;<br>this.view.CameraId.accessMode=constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY;<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Camera_Properties.htm"> Camera Access Mode </a><br>'
                                }
    							]; 
          break;
        case 3:	formToBeNavigated = "frmOrientation";
          data = [
      								{
                                  "APIName" : "Capture Orientation ",
                                  "Description" : "Capture Orientation showcases the captureOrientation property of the Camera widget. You can set the orientation of the image as either Portrait or Landscape by using this property.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Capture Orientatio*/<label><br><label style=color:#f2f1f1>/*<br>@This property is set through IDE, It can also be configurable from code as well, code follows:*/</label><br><label style=color:#ffffff>this.view.CameraId.captureOrientation=constants.CAMERA_CAPTURE_ORIENTATION_LANDSCAPE;<br>this.view.CameraId.captureOrientation=constants.CAMERA_CAPTURE_ORIENTATION_PORTRAIT;<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Camera_Properties.htm"> Capture Orientation  </a><br>'
                                }
    							]; 
          break;
        default:
          

          kony.print("You Shld not be here!!!");
          return;   
      }
      var ntf = new kony.mvc.Navigation(formToBeNavigated);
      ntf.navigate();
    }catch(error){
      kony.print("frmProperties Controller"+JSON.stringify(error));
    }
  }
});