define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** oncapture defined for Camera0a5cb8ebf4e3644 **/
    AS_Camera_ba33caab59144031afc043cf1864dd52: function AS_Camera_ba33caab59144031afc043cf1864dd52(eventobject) {
        var self = this;
        this.assignCapturedImg(eventobject);
    },
    /** onselection defined for sliderRotate **/
    AS_Slider_gb0c567107804cc4a678bd7335d2d92b: function AS_Slider_gb0c567107804cc4a678bd7335d2d92b(eventobject, selectedvalue) {
        var self = this;
        return self.rotateOnslide.call(this);
    },
    /** onclick defined for btnCancel **/
    AS_Button_e8434ed03c3d430c9225f18c8af36e21: function AS_Button_e8434ed03c3d430c9225f18c8af36e21(eventobject) {
        var self = this;
        this.view.capturedImage.rawBytes = this.cameraRawBytes;
    },
    /** onclick defined for btnApply **/
    AS_Button_i308faa7bb974da0bdfa68511926bfb6: function AS_Button_i308faa7bb974da0bdfa68511926bfb6(eventobject) {
        var self = this;
        this.applyRotatedImage();
    },
    /** onclick defined for fltngBtn **/
    AS_Button_aa8b060fa3f64e91ab9d536576e46eeb: function AS_Button_aa8b060fa3f64e91ab9d536576e46eeb(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** ontouchend defined for lblLeft **/
    AS_Label_c7927e71975346ab86ca81343dc9a0e6: function AS_Label_c7927e71975346ab86ca81343dc9a0e6(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLanding");
        ntf.navigate();
    }
});