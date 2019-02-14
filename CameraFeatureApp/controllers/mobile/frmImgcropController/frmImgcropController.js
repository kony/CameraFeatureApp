define({ 

  //Type your controller code here 
  rawbytes:null,
  cameraRawBytes:null,
  img:null,
  centerx:null, centery:null,

  assignCapturedImg:function(cameraObject){
    this.cameraRawBytes = cameraObject.rawBytes;
    this.createImageObject();
    this.assignRawBytestoImage();
    this.view.btnCrop.setEnabled(true);
    var ntf= new kony.mvc.Navigation("frmImgcrop");
    ntf.navigate();
  },
  createImageObject:function(){
    this.img = kony.image.createImage(this.cameraRawBytes);
    this.undoImageObject1=kony.image.createImage(this.cameraRawBytes);
  },
  assignRawBytestoImage:function(){
    this.view.imgCrop.width=this.img.getImageWidth()+"px";
    this.view.imgCrop.height=this.img.getImageHeight()+"px";
    this.view.imgCrop.rawBytes=this.img.getImageAsRawBytes();
    this.view.forceLayout();
  },
  cropImage:function(){
    var tempImag = kony.image.createImage(this.img.getImageAsRawBytes());  
    if(kony.os.deviceInfo().name == "android")
    {
      var tempfilter = kony.filter.createFilter();
      filterData = {
        "filterName": kony.filter.BRIGHTNESS,
        "inputImage": this.img,
        "inputBrightness": 0.2
      };

      tempfilter.applyFilter(filterData);
      this.view.capturedImage.width= this.img.getImageWidth()+"px";
      this.view.capturedImage.height=this.img.getImageHeight()+"px";
      var imageObj = tempfilter.getOutputImage();
      this.view.capturedImage.rawBytes=imageObj.getImageAsRawBytes();
      this.view.forceLayout();
    }
    else{
      var tempfilter = kony.filter.createFilter();
      filterData= {
        "filterName": kony.filter.COLOR_CONTROLS,
        "inputImage": this.img,
        "inputBrightness": 0.1,
        "inputContrast":0.2

      };
      tempfilter.applyFilter(filterData);
      this.view.capturedImage.width= this.img.getImageWidth()+"px";
      this.view.capturedImage.height=this.img.getImageHeight()+"px";
      var imageObj = tempfilter.getOutputImage();
      this.view.capturedImage.rawBytes=imageObj.getImageAsRawBytes();
      this.view.forceLayout();
    }

    var width= tempImag.getImageWidth();
    var height= tempImag.getImageHeight();
    kony.print("###############Image Width is##############"+width);
    kony.print("###############Image Height is ############"+height);
    this.centerx=width/2;
    this.centery=height/2;
    var xFivePercentage=(8*width)/100;
    var yFivePercentage=(8*height)/100;
    var x = this.centerx-xFivePercentage;
    var y = this.centery-yFivePercentage;
    var w = 2*xFivePercentage;
    var h = 2*yFivePercentage;
    kony.print("###############Image x is ############"+x+"y is"+y+"width is"+w+"height is"+h);
    tempImag.cropToRect([x,y,w,h]);
    this.view.imgCrop.width=w+"px";
    this.view.imgCrop.height=h+"px";
    var croprawybtes=tempImag.getImageAsRawBytes();
    this.view.imgCrop.rawBytes=tempImag.getImageAsRawBytes();
    finalImageObject=kony.image.createImage(croprawybtes);
    this.view.sliderCrop.setEnabled(true);
    this.view.forceLayout();
  },

  onCropSlideFunc:function(){
    var tempImag = kony.image.createImage(this.img.getImageAsRawBytes());
    var width= tempImag.getImageWidth();
    var height= tempImag.getImageHeight();
    kony.print("###############Image Width is##############"+width);
    kony.print("###############Image Height is ############"+height);
    var percentagevalue= (this.view.sliderCrop.selectedValue)/3;
    kony.print("##########"+percentagevalue+"StepValue");
    var xPercentage=(percentagevalue*width)/100;
    var yPercentage=(percentagevalue*height)/100;
    var x = this.centerx-xPercentage;
    var y = this.centery-yPercentage;
    var w = xPercentage*2;
    var h = yPercentage*2;
    kony.print("###############Image x is ############"+x+"y is"+y+"width is"+w+"height is"+h);
    tempImag.cropToRect([x,y,w,h]);
    this.view.imgCrop.width=w+"Px";
    this.view.imgCrop.height=h+"Px";
    var rawbytesOfCropValue =tempImag.getImageAsRawBytes();
    this.finalImageObject=kony.image.createImage(rawbytesOfCropValue);
    this.view.imgCrop.image=tempImag;
    this.view.btnApply.setEnabled(true);
    this.view.forceLayout();
  },

  applyCropImage:function(){

    this.img = this.finalImageObject;
    this.view.croppedImg.width=this.img.getImageWidth()+"px";
    this.view.croppedImg.height=this.img.getImageHeight()+"px";
    this.view.croppedImg.rawBytes=this.img.getImageAsRawBytes();
    this.view.forceLayout();

  }
}); 