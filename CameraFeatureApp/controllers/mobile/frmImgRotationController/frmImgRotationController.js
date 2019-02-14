define({ 
  
 
  cameraRawBytes : null,
  rotatedRawBytes:null,
  imgObj : null,

   assignCapturedImg:function(cameraObject){ 
     this.cameraRawBytes = cameraObject.rawBytes; 
     this.view.capturedImage.rawBytes=this.cameraRawBytes;   
     var ntf= new kony.mvc.Navigation("frmImgRotation");
    ntf.navigate() ;
   },
  applyRotatedImage :function(){
    this.view.rotatedImg.rawBytes=this.rotatedRawBytes;
    this.view.capturedImage.rawBytes=this.cameraRawBytes;
    this.imgObj.writeToMediaGallery({
        albumName: 'Gallery1'
    });
    //#ifdef android
    var toast1 = new kony.ui.Toast({"text":"Rotated Image is saved to Gallery1 album of File gallery ", "duration":constants.SHORT});
		toast1.show(); 
    //#endif
  },
  rotateOnslide:function(){
  	var getDegree=this.view.sliderRotate.selectedValue;
    var img=kony.image.createImage(this.cameraRawBytes);  
    img.rotate(getDegree ,false); 
    this.view.capturedImage.rawBytes=img.getImageAsRawBytes(); 
    this.rotatedRawBytes = img.getImageAsRawBytes();
     this.imgObj=img;  
    alert("selected value: "+ getDegree ); 
}
});