$(document).ready(function(){
'use strict';

$("#fldCity").click().val("");


$.get('http://ckan.ancitel.it/api/action/datastore_search?resource_id=c381efe6-f73f-4e20-a825-547241eeb457',
	function(data_istat){		
		var provincia = [];
		
		$.each(data_istat.result.records, function (i) {
			provincia[i] = (data_istat.result.records[i].Provincia);
				
		});

	
	$( "#fldCity" ).autocomplete({
      source: proviciaPulita
    });
		
});
	
$("#btnSearch").click(function(){
	var city = $("#fldCity").val();
	$.get('http://api.openweathermap.org/data/2.5/forecast/city?APPID=9937e6b6da187d767647cc5fefe59f33&q='+city+'&units=metric',
	function(data){
		var latitudine = data.city.coord.lat;
		var longitudine = data.city.coord.lon;						
		var myLatLng = {lat: latitudine, lng: longitudine};
		var temperature = Math.round(data.list[0].main.temp);
		var description = data.list[0].weather[0].main;
		var icon = data.list[0].weather[0].icon;
		var wind = data.list[0].wind.speed;
		
		$('#map').css('border','1px solid #333');
		$('#meteoInfo').css('background','rgba(0,0,0,0.5)');
		initialize(myLatLng);
		
		$('#meteoInfo').html('<h1>'+city+'</h1><span>'+temperature+'<i class="icon"></i></span>'+'<span>'+description+'</span>'+'<img src="http://openweathermap.org/img/w/'+icon+'.png"><span>'+wind+'<i class="icon"></i></span>');
		
		});	
			
	});
});

//GOOGLE MAPS
function initialize(myLatLng) {
'use strict';
  var map;
  var mapOptions = {
	  center: myLatLng,
	  zoom: 17,
	  radius: '500',
      types: ['store']
	  
  };
var map = new google.maps.Map(document.getElementById('map'), mapOptions); 
}

			