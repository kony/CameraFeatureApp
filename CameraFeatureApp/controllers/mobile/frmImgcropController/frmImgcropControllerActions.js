define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** oncapture defined for Camera0a5cb8ebf4e3644 **/
    AS_Camera_f22ea22073a3461ea7e43d7173bf3135: function AS_Camera_f22ea22073a3461ea7e43d7173bf3135(eventobject) {
        var self = this;
        this.assignCapturedImg(eventobject);
    },
    /** onselection defined for sliderCrop **/
    AS_Slider_dd475e5348944655adcbdc367468f9f2: function AS_Slider_dd475e5348944655adcbdc367468f9f2(eventobject, selectedvalue) {
        var self = this;
        this.onCropSlideFunc();
    },
    /** onclick defined for btnCrop **/
    AS_Button_hcfcf88e46c245dc8f317c45102467c2: function AS_Button_hcfcf88e46c245dc8f317c45102467c2(eventobject) {
        var self = this;
        this.cropImage();
    },
    /** onclick defined for btnApply **/
    AS_Button_i27b17180d754cf3a1902bebc203a08a: function AS_Button_i27b17180d754cf3a1902bebc203a08a(eventobject) {
        var self = this;
        this.applyCropImage();
    },
    /** onclick defined for fltngBtn **/
    AS_Button_b0e98a3a029244b39ad02f34db93331d: function AS_Button_b0e98a3a029244b39ad02f34db93331d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** ontouchend defined for lblLeft **/
    AS_Label_a5280b47d02c49669075664696b3184a: function AS_Label_a5280b47d02c49669075664696b3184a(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLanding");
        ntf.navigate();
    },
    /** init defined for frmImgcrop **/
    AS_Form_f0837cfc32314c188b98f7a6933be8c8: function AS_Form_f0837cfc32314c188b98f7a6933be8c8(eventobject) {
        var self = this;
        this.view.sliderCrop.setEnabled(false);
        this.view.btnCrop.setEnabled(false);
        this.view.btnApply.setEnabled(false);
    },
    /** preshow defined for frmImgcrop **/
    AS_Form_ac287fca6611477a800b88c8daa52dc1: function AS_Form_ac287fca6611477a800b88c8daa52dc1(eventobject) {
        var self = this;
    },
    /** postshow defined for frmImgcrop **/
    AS_Form_d6caab61499f4d02aaf64348c4d94db8: function AS_Form_d6caab61499f4d02aaf64348c4d94db8(eventobject) {
        var self = this;
    }
});