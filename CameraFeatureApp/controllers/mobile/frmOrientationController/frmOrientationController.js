define({ 

  //Type your controller code here 
  onCapturePortOrientaion:function(cameraObject)
  {
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.view.imgPortrait.rawBytes=cameraObject.rawBytes;
    this.view.lblOrientation.text = "Camera orientation mode is in portrait mode."
    kony.application.dismissLoadingScreen();
  },
  onCaptureLandOrientaion:function(cameraObject)
  {
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.view.imgLandscape.rawBytes=cameraObject.rawBytes;
    this.view.lblOrientation.text = "Camera orientation mode is in Landscape mode."
    kony.application.dismissLoadingScreen();
  }

});