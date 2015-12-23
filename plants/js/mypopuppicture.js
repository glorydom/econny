$(function() {
	console.log();
	if($(window).width() < 480){
		$(".rescalepic").on("click",function(){
			
			$("#destpic").attr('src',$(this).attr('src'));
			
			$( "#dialog" ).dialog({ 
				//buttons: { "Ok": function() { $(this).dialog("close"); } }  
			});
			
			$('#dialog').focus();
		});
	}
});