define({ 

 //Type your controller code here 
  
  assignToImage:function(cameraObject){
    	var rawbytes  = cameraObject.rawBytes;
    	this.view.imgRawbytes.rawBytes=rawbytes;
 		var bse64 = kony.convertToBase64(rawbytes);
    	this.view.imgBase64.base64=bse64;
    	
  }

 });