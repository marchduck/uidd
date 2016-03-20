
    /*$("#button_yellow").click(function(){
        $("#page").css("display","none")
    }); */
$(document).ready(function(){
	$("#button_yellow").click(function()
	   {$("#page_a").fadeIn();});
	});    
	
$(document).ready(function(){
  $("#down").click(function(){
	  
    $("#page_b").animate({top:'-20.5%'},1000);
	
	 $("#page_b").css("display","block");
  });
}); 
