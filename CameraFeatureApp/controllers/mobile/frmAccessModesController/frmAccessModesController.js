define({ 

  //Type your controller code here 
  onCapturePublicMode:function(cameraObject){
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.view.imgPublic.rawBytes=cameraObject.rawBytes;
    this.view.lblDescptn.text = "First image from left is the captured image in public mode. You can see the image in image Gallery of the camera as well.To observe this ,Hide the application and open camera and go to image gallery."
    kony.application.dismissLoadingScreen();
  },
  onCapturePrivateMode:function(cameraObject){
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.view.imgPrivate.rawBytes=cameraObject.rawBytes;     
    this.view.lblDescptn.text = "Second image from left is the captured image in private mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery.";       
    kony.application.dismissLoadingScreen();   

    //#ifdef android
    var ntf=new kony.mvc.Navigation("frmAccessModes");
    ntf.navigate();
    //#endif

  },
  onCaptureInMemoryMode:function(cameraObject){
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.view.imgInMem.rawBytes=cameraObject.rawBytes;
    this.view.lblDescptn.text = "Third image from left is the captured image in inMemory mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
    kony.application.dismissLoadingScreen();

    //#ifdef android
    var ntf=new kony.mvc.Navigation("frmAccessModes");
    ntf.navigate();
    
    //#endif
  }

});