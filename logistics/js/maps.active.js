function init(){var e={zoom:11,scrollwheel:!1,center:new google.maps.LatLng(40.67,-73.94),styles:[{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"on"}]}]},t=document.getElementById("map"),t=new google.maps.Map(t,e);new google.maps.Marker({position:new google.maps.LatLng(40.67,-73.94),map:t,icon:"img/map-marker.png",title:"WEEDING DAY!"})}google.maps.event.addDomListener(window,"load",init);