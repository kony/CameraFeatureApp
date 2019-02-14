define({ 

 //Type your controller code here 
	assignToVideo:function(cameraObject){
      this.view.vidDisplay.setSource({rawBytes:cameraObject.rawBytes});
      var ntf=new kony.mvc.Navigation("frmVideoOverlay");
		ntf.navigate();
    }
 });