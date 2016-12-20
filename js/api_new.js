$(document).ready(function(){
'use strict';

var city = $("#fldCity").val();
	
	$("#btnSearch").click(function(){			
			
			$('#map').css('border','1px solid #333');
			$('#meteoInfo').css('background','rgba(0,0,0,0.5)');
			getMeteo(data);
			initialize(myLatLng);
			
			$('#meteoInfo').html('<h1>'+city+'</h1><span>'+temperature+'<i class="icon">&#xe800;</i></span>'+'<span>'+description+'</span>'+'<img src="http://openweathermap.org/img/w/'+icon+'.png"><span>'+wind+'<i class="icon">&#xe801;</i></span>');
			
				
	});
});

//METEO
	$.get('http://api.openweathermap.org/data/2.5/forecast/city?APPID=9937e6b6da187d767647cc5fefe59f33&q='+city+'&units=metric',
		function getMeteo(data){
			latitudine = data.city.coord.lat;
			longitudine = data.city.coord.lon;						
			myLatLng = {lat: latitudine, lng: longitudine};
			temperature = Math.round(data.list[0].main.temp);
			description = data.list[0].weather[0].main;
			icon = data.list[0].weather[0].icon;
			wind = data.list[0].wind.speed;	
			});	


//GOOGLE MAPS
function initialize(myLatLng) {
'use strict';
  var map;
  var mapOptions = {
	  center: myLatLng,
	  zoom: 17,
  };
var map = new google.maps.Map(document.getElementById('map'), mapOptions); 
}

			