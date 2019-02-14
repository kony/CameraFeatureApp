define({ 

  //Type your controller code here 

  assignToImage:function(cameraObject){
    var rawbytes  = cameraObject.rawBytes;
    this.view.imgCaptured.rawBytes=rawbytes; 
    this.view.imgCaptured.zoomEnabled=true;
  },
  addImgOverlay:function(){
    var imgOverlay = new kony.ui.Image2({
      "centerX": "50%",
      "centerY": "50%",
      "height": "32dp",
      "id": "imgOverlay",
      "isVisible": true,
      "left": "0px",
      "skin": "slImage",
      "src": "kony_48.png",
      "top": "0px",
      "width": "27dp",
      "zIndex": 1
    }, {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {});    
    this.view.imgCaptured.addOverlayWidgets([imgOverlay]);

  },
  buttonClicked : function(){
    alert("button clicked");
  }

});