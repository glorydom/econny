$(function(){
	
	var slider = $('.my-slider').unslider({arrows: {
		//  Unslider default behaviour
		prev: '<a class="slide_arrow_prev"></a>',
		next: '<a class="slide_arrow_next"></a>'
	}});
	slider.on('unslider.ready', function() {
	});
	//  Listen to slide changes
	slider.on('unslider.change', function(event, index, slide) {
		//alert('Slide has been changed to ' + index);
	});
	
	$.ajax({
		type: "GET",
		url: "http://greentalk.ren/RockPlant/app/queryStatus.do",
		data: {},
		dataType: "json",
		success: function(data){
			alert(data);
			$("#plant_status").html("<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>"+data[0].content+"</div><br/>"
									+"<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>"+data[1].content+"</div><br/>"
									+"<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>"+data[2].content+"</div><br/>"
									+"<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>"+data[3].content+"</div><br/>"
									);
		}
	});	
	
	$("#conversionsubmit").click(function(){
		var conversion = $("#plant_status").html();
		var question = $("#question").val();
		$("#plant_status").html(conversion
								+"<div style='text-align:right;'><img class='plant_img_size' src='icon/person.jpg'></img></div><div style='text-align:right;'><div class='person_message'>"+question+"</div></div>"
							);
								
		$.ajax({
			type: "GET",
			url: "http://greentalk.ren/RockPlant/app/queryStatus.do",
			data: {},
			dataType: "json",
			success: function(data){
				
				var conversion = $("#plant_status").html();
				$("#plant_status").html(conversion
										+"<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>"+data+"</div><br/>"
										);
			}
		});
	});
	
	/*
	$("#plant_status").html("<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>afdafasdfasdf</div><br/>"
							+"<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>afdafasdfasdf</div><br/>"
							+"<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>afdafasdfasdf</div><br/>"
							+"<div><img class='plant_img_size' src='icon/icon.png'></img></div><div class='plant_message'>afdafasdfasdf</div><br/>"
							);	
	//Get the context of the canvas element we want to select
	var ctx = document.getElementById("myChartOne").getContext("2d");
	
	$("#plantonetemperature").click(function(){
		
		var data = {
			labels : ["0","2","4","6","8","10","12","14","16","18","20","22"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [34,25,45,43,34,13,32,25,20,28,56,55,17]
				}
			]
		}
		new Chart(ctx).Line(data);
		$(this).css({"color":"grey","background":"#81a231","border-radius":"1em"});
		$("#plantonehumidity").css({"color":"#81a231","background":"#ffffff","border-radius":"none"});
	});
	
	$("#plantonehumidity").click(function(){
		var data = {
			labels : ["0","2","4","6","8","10","12","14","16","18","20","22"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [28,34,12,57,22,13,32,56,12,67,23,55,17]
				}
			]
		}
		new Chart(ctx).Line(data);
		$(this).css({"color":"grey","background":"#81a231","border-radius":"1em"});
		$("#plantonetemperature").css({"color":"#81a231","background":"#ffffff","border-radius":"none"});
	});
	
	
	$("#plantonetemperature").click();	*/
});