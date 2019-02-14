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
    /** ontouchend defined for Label0e1cd6a09aea049 **/
    AS_Label_c7877239b9dc4fa3b8b7725697114f02: function AS_Label_c7877239b9dc4fa3b8b7725697114f02(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmVideoProperties");
        ntf.navigate();
    },
    /** oncapture defined for vidOverlay **/
    AS_Camera_f8eaadec860a478fb83d9dd3528c6b74: function AS_Camera_f8eaadec860a478fb83d9dd3528c6b74(eventobject) {
        var self = this;
        this.assignToVideo(eventobject);
    },
    /** onclick defined for fltngBtn **/
    AS_Button_d8bcc49111b64cca9b6203933a1d73ff: function AS_Button_d8bcc49111b64cca9b6203933a1d73ff(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    }
});