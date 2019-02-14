define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** ontouchend defined for lblBack **/
    AS_Label_c78ea5cca8ff46d4b1d961b2aa85e8a3: function AS_Label_c78ea5cca8ff46d4b1d961b2aa85e8a3(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLanding");
        ntf.navigate();
    },
    /** oncapture defined for Camera0e49c0484893d42 **/
    AS_Camera_b76eaceec83744caa53fd4be3e38f829: function AS_Camera_b76eaceec83744caa53fd4be3e38f829(eventobject) {
        var self = this;
        return self.assignToImage.call(this, eventobject);
    },
    /** onclick defined for btnCrop **/
    AS_Button_a3145b5430c74308903b044bdca75a63: function AS_Button_a3145b5430c74308903b044bdca75a63(eventobject) {
        var self = this;
        return self.addImgOverlay.call(this);
    },
    /** onclick defined for fltngBtn **/
    AS_Button_cd3071fcc0984149867958f6890de154: function AS_Button_cd3071fcc0984149867958f6890de154(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    }
});