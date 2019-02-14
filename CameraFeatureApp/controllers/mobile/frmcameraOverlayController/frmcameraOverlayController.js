define({ 

 //Type your controller code here 

  onCaptureFrmOverLay:function(cameraObject){
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		this.view.imgCapturedOverlay.rawBytes=cameraObject.rawBytes;	
    	var ntf=new kony.mvc.Navigation("frmcameraOverlay");
		ntf.navigate();
		kony.application.dismissLoadingScreen();
  }
 });