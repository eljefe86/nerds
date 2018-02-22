// Map
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
    icon: 'http://127.0.0.1:8080/img/map-marker.png'
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

// Popup
var popup = document.querySelector(".modal-form");
var writeUs = document.querySelector(".btn_contacts");
var closePopup = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

writeUs.addEventListener("click", function (e) {
  e.preventDefault();

  popup.classList.toggle("modal-show");
  login.focus();
});

closePopup.addEventListener("click", function (e) {
  e.preventDefault();

  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!login.value) {
    login.classList.add("modal-form__required-value");
  }

  if (!email.value) {
    email.classList.add("modal-form__required-value");
  }

  if (!text.value) {
    text.classList.add("modal-form__required-value");
  }
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
