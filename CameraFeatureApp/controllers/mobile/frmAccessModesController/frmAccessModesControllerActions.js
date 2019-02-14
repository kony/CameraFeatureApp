define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** ontouchend defined for headerIconLeft **/
    AS_Label_jaab110faf1a42758404d968e9ecb2d2: function AS_Label_jaab110faf1a42758404d968e9ecb2d2(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmProperties");
        ntf.navigate();
    },
    /** oncapture defined for CamPublic **/
    AS_Camera_c81a07034a164602a198ae934f046c18: function AS_Camera_c81a07034a164602a198ae934f046c18(eventobject) {
        var self = this;
        this.onCapturePublicMode(eventobject);
    },
    /** oncapture defined for CamPrivate **/
    AS_Camera_f389dfa7d7a646809c656bd080c5238f: function AS_Camera_f389dfa7d7a646809c656bd080c5238f(eventobject) {
        var self = this;
        this.onCapturePrivateMode(eventobject);
    },
    /** oncapture defined for CamInMem **/
    AS_Camera_a1666955ca9f4703960f10da531b6d54: function AS_Camera_a1666955ca9f4703960f10da531b6d54(eventobject) {
        var self = this;
        this.onCaptureInMemoryMode(eventobject);
    },
    /** onclick defined for fltngBtn **/
    AS_Button_j78435f0d3014bc6b7b0ff98f8358fe1: function AS_Button_j78435f0d3014bc6b7b0ff98f8358fe1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    }
});