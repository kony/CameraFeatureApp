define({ 
  /**
			 * @function featureSelected
			 * @description navigates to selected feature
			 */
  featureSelected:function(){
    try{
      var formToBeNavigated = null;     

      switch(this.view.segFeatureOptions.selectedRowIndex[1]){
        case 0:	formToBeNavigated = "frmProperties";
          break;
        case 1:	formToBeNavigated = "frmVideoProperties";
          break; 
        case 2:	formToBeNavigated = "frmImgcrop";
            data = [
      								{
                                  "APIName" : "Image Cropping",
                                  "Description" : "Image Cropping showcases the enablePhotoCropFeature property of the Camera widget. You can crop the captured image by using this property. ",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Image Cropping*/<label><br><label style=color:#f2f1f1>/*<br>@function cropImage<br>@description crops the captured image<br>@defined in the frmImgcropController<br>*/</label><br><br><label style=color:#ffffff>cropImage:function(){<br>var tempImag = kony.image.createImage(this.img.getImageAsRawBytes());<br>if(kony.os.deviceInfo().name == "android")<br>{<br>var tempfilter = kony.filter.createFilter();<br>filterData = {<br>"filterName": kony.filter.BRIGHTNESS,<br>"inputImage": this.img,<br>"inputBrightness": 0.2<br>};<br>tempfilter.applyFilter(filterData);<br>this.view.capturedImage.width= this.img.getImageWidth()+"px";<br>this.view.capturedImage.height=this.img.getImageHeight()+"px";<br>var imageObj = tempfilter.getOutputImage();<br>this.view.capturedImage.rawBytes=imageObj.getImageAsRawBytes();<br>this.view.forceLayout();<br>}<br>else{<br>var tempfilter = kony.filter.createFilter();<br>filterData= {<br>"filterName": kony.filter.COLOR_CONTROLS,<br>"inputImage": this.img,<br>"inputBrightness": 0.1,<br>"inputContrast":0.2<br>};<br>tempfilter.applyFilter(filterData);<br>this.view.capturedImage.width= this.img.getImageWidth()+"px";<br>this.view.capturedImage.height=this.img.getImageHeight()+"px";<br>var imageObj = tempfilter.getOutputImage();<br>this.view.capturedImage.rawBytes=imageObj.getImageAsRawBytes();<br>this.view.forceLayout();<br>}<br>var width= tempImag.getImageWidth();<br>var height= tempImag.getImageHeight();<br>kony.print("###############Image Width is##############"+width);<br>kony.print("###############Image Height is ############"+height);<br>this.centerx=width/2;<br>this.centery=height/2;<br>var xFivePercentage=(8*width)/100;<br>var yFivePercentage=(8*height)/100;<br>var x = this.centerx-xFivePercentage;<br>var y = this.centery-yFivePercentage;<br>var w = 2*xFivePercentage;<br>var h = 2*yFivePercentage;<br>kony.print("###############Image x is ############"+x+"y is"+y+"width is"+w+"height is"+h);<br>tempImag.cropToRect([x,y,w,h]);<br>this.view.imgCrop.width=w+"px";<br>this.view.imgCrop.height=h+"px";<br>var croprawybtes=tempImag.getImageAsRawBytes();<br>this.view.imgCrop.rawBytes=tempImag.getImageAsRawBytes();<br>finalImageObject=kony.image.createImage(croprawybtes);<br>this.view.sliderCrop.setEnabled(true);<br>this.view.forceLayout();<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Camera_Properties.htm"> Image Cropping </a><br>'
                                }
    							];
          break;
          case 3:	formToBeNavigated = "frmImgRotation";
            data = [
      								{
                                  "APIName" : "Image Rotate",
                                  "Description" : "Rotates an imageObject either in a clockwise or counter-clockwise manner, depending on the specified rotation degree. ",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Image Rotation*/<label><br><label style=color:#f2f1f1>/*<br>@function rotateOnslide<br>@description rotates the captured image when slider is moved<br>@defined in the frmImgRotationController<br>*/</label><br><br><label style=color:#ffffff>rotateOnslide:function(){<br>var getDegree=this.view.sliderRotate.selectedValue;<br>var img=kony.image.createImage(this.cameraRawBytes);<br>img.rotate(getDegree ,false);<br>this.view.capturedImage.rawBytes=img.getImageAsRawBytes();<br>this.rotatedRawBytes = img.getImageAsRawBytes();<br>this.imgObj=img;<br>alert("selected value: "+ getDegree );<br>}<br><label style=color:#f2f1f1>/*<br>@function applyRotatedImage<br>@description selected image will be applied to new image widget and will get stored to Photo Gallery of device<br>@defined in the frmImgRotationController<br>*/</label><br><br><label style=color:#ffffff>applyRotatedImage :function(){ <br>this.view.rotatedImg.rawBytes=this.rotatedRawBytes;<br>this.view.capturedImage.rawBytes=this.cameraRawBytes;<br>this.imgObj.writeToMediaGallery({<br>albumName: \'Gallery1\'<br>});<br>}<br></label> ',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#image_methods.htm%23rotate"> Image Rotate </a><br>'
                                }
    							];
          break; 
          case 4:	formToBeNavigated = "frmPinchZoom";
            data = [
      								{
                                  "APIName" : "Pinch and Zoom for Image",
                                  "Description" : "Image widget now supports Pinch to Zoom and Pan capabilities for better operability on the contained image. The widget now responds to pinch gestures to zoom in/out the images.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Pinch and Zoom Image*/<label><br><label style=color:#f2f1f1>/*<br>@function assignToImage<br>@description Assigns the camera rawbytes to image widget and enables zoom<br>@defined in the frmPinchZoomController<br>*/</label><br><br><label style=color:#ffffff>assignToImage:function(cameraObject){<br>var rawbytes  = cameraObject.rawBytes;<br>this.view.imgCaptured.rawBytes=rawbytes;<br>this.view.imgCaptured.zoomEnabled=true;<br>}<br><label style=color:#f2f1f1>/*<br>@function addImgOverlay<br>@description adds the overlay widget to captured image<br>@defined in the frmPinchZoomController<br>*/</label><br><br><label style=color:#ffffff>addImgOverlay:function(){<br>var imgOverlay = new kony.ui.Image2({<br>"centerX": "50%",<br>"centerY": "50%",<br>"height": "32dp",<br>"id": "imgOverlay",<br>"isVisible": true,<br>"left": "0px",<br>"skin": "slImage",<br>"src": "kony_48.png",<br>"top": "0px",<br>"width": "27dp",<br>"zIndex": 1<br>}, {<br>      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,<br>"padding": [0, 0, 0, 0],<br>"paddingInPixel": false<br>}, {});<br> this.view.imgCaptured.addOverlayWidgets([imgOverlay]);<br>}<br></label> ',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "https://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Kony_Visualizer_Widget_Programmer_s_Guide.htm%23Pinch_and_Zoom"> Pinch and Zoom for image </a><br>'
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
      kony.print("frmLanding Controller"+JSON.stringify(error));
    }
  }
});