define({ 

 //Type your controller code here 
	assignToVideo:function(cameraObject){
      this.view.vidBasic.setSource({rawBytes:cameraObject.rawBytes});
    }
 });