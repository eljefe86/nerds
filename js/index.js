var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.938945, lng: 30.322734},
    mapTypeId: 'roadmap',
    zoom: 17
  });

  var nerds = {lat: 59.938778, lng: 30.323788};

  var marker = new google.maps.Marker({
    position: nerds,
    map: map,
    title: 'Студия дизайна Нёрдс!',
    icon: 'http://localhost:8080/nerds/img/map-marker.png'
  });

  var contentString = '<b class="contacts__title">NЁRDS DESIGN STUDIO</b>' +
  '<p>191186, Санкт-Петербург,<br> ул. Б. Конюшенная, д. 19/8</p>' +
  '<a class="contacts__phone" href="tel:+78122757575">тел. +7 (812) 275-75-75</a>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
