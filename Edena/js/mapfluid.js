var mymap = L.map('fluidhotelmap').setView([42.308, -71.137], 12);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);


var popup1 = L.popup({closeButton: false})
    .setLatLng([0, 0])
    .setContent("<img src='images/3.jpg'> <p>room1</p>")
    .openOn(mymap);

var popup2 = L.popup({closeButton: false})
    .setLatLng([0, 0])
    .setContent("<img src='images/1.jpg'> <p>room1</p>")
    .openOn(mymap);

var popup3 = L.popup({closeButton: false})
    .setLatLng([0, 0])
    .setContent("<img src='images/12.jpg'> <p>room1</p>")
    .openOn(mymap);



    L.marker([42.363, -71.0599]).addTo(mymap)
		.bindPopup(popup1).openPopup();

    L.marker([42.308, -71.137]).addTo(mymap)
		.bindPopup(popup2).openPopup();

    L.marker([42.3546624, -71.060]).addTo(mymap)
		.bindPopup(popup2).openPopup();

	// L.circle([42.308, -71.137], 500, {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5
	// }).addTo(mymap).bindPopup("I am a circle.");

	// L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(mymap).bindPopup("I am a polygon.");


	// var popup = L.popup();

	// function onMapClick(e) {
	// 	popup
	// 		.setLatLng(e.latlng)
	// 		.setContent("You clicked the map at " + e.latlng.toString())
	// 		.openOn(mymap);
	// }

	mymap.on('click', onMapClick);