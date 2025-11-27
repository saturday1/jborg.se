$(function(){

	$("#submit-button").click(function(){
		
		$("#loading").fadeIn(100).show();
		
		var from = $("#from").val();
		var name = $("#name").val();
		var content = $("#content").val();
		
		var data = "from=" + from + "&name=" + name + "&content=" + content;
		
		if(name == "" || name == "Your name..."){
			
			$("#error-name").fadeIn(700).show();
			$("#error-name").delay(3500).show();
			$("#error-name").fadeOut(1000).show();
			$("#loading").fadeOut(100).hide();
			
		}else if(!from.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)){
			
			$("#error-from").fadeIn(700).show();
			$("#error-from").delay(3500).show();
			$("#error-from").fadeOut(1000).show();
			$("#loading").fadeOut(100).hide();
			
		}else if(content == "" || content == "Write me something..."){
			
			$("#error-content").fadeIn(700).show();
			$("#error-content").delay(3500).show();
			$("#error-content").fadeOut(1900).show();
			$("#loading").fadeOut(100).hide();
			
		}else{
			
			$.ajax({
				type: "POST",
				url: "jquery/send.php",
				data: data,
				success: function(){
					
					$("#loading").fadeOut(500).hide();
					$('#message-sent').fadeIn(500).show();
					$('#message-sent').fadeOut(3000).show();
					
				}
			});
			
		}
		
	});	
	
});