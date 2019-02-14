define({ 

 //Type your controller code here 
   onNavigate : function(kfdata){

     if(kfdata!==null && kfdata!==undefined){
       this.view.KnowledgeFramework.setData(kfdata);
       return;
       
     }else{
           this.view.KnowledgeFramework.setData(data);
       
     }
  }

 });