define({ 
  /**
			 * @function featureSelected
			 * @description navigates to selected feature
			 */
  featureSelected:function(){
    try{
      var formToBeNavigated = null;

      switch(this.view.segFeatureOptions.selectedRowIndex[1]){
        case 0:	formToBeNavigated = "frmBasicVideo";
          data = [
      								{
                                  "APIName" : "Basic Video",
                                  "Description" : "Basic Video showcases the video capturing capabilities of the Camera widget. You can record video and store it in your device memory by using the Camera widget provided by Kony AppPlatform. ",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Basic Video*/<label><br><label style=color:#f2f1f1>/*<br>@function assignToVideo<br>@description assigns the captured video to Video widget using rawbytes property <br>@param cameraObject- eventObject which holds captured video data<br>@defined in the frmBasicVideoController<br>*/</label><br><br><label style=color:#ffffff>assignToVideo:function(cameraObject){<br>this.view.vidBasic.setSource({rawBytes:cameraObject.rawBytes});<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Camera_Properties.htm "> Basic Video  </a><br>'
                                }
    							];
          break;
        case 1:	formToBeNavigated = "frmVideoOverlay";
          data = [
      								{
                                  "APIName" : "Video with overlay",
                                  "Description" : "Video with Form Overlay showcases the enableOverlay property of the Camera widget. You can over-lay any Form UI over the camera view finder by using the enableOverlay property. This screen shows the record and stop buttons as part of the overlay screen.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Camera Overlay*/<label><br><label style=color:#f2f1f1>/*<br>@This property is set through IDE, It can also be configurable from code as well, code follows:*/</label><br><br><label style=color:#ffffff>this.view.CameraId.enableOverlay=true;<br>this.view.CameraId.overlayConfig={<br>"startVideoButtonText": "Start",<br>"stopVideoButtonText": "Stop",<br>"overlayForm": "frmCameraOverlaid",<br>"timerControlSkin": "camSkinBlue",<br>"startVideoButtonSkin": "camSkinBlue",<br>"stopVideoButtonSkin": "camSkinBlue"<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Camera_Properties.htm"> Video with overlay </a><br>'
                                }
    							];
          break;
        ;
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