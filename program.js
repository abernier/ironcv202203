// var message = "Hey!"

/* je suis un commentaire
sur plusieurs lignes */

// alert(message); // je suis poli
// alert("Ca va?");

var mapElement = document.getElementById("map");

var mapOptions = {
  zoom: 14,
  center: {
    lat: 48.8566,
    lng: 2.3522,
  },
  styles: [
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      stylers: [
        {
          hue: "#00aaff",
        },
        {
          saturation: -100,
        },
        {
          gamma: 2.15,
        },
        {
          lightness: 12,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          lightness: 24,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          lightness: 57,
        },
      ],
    },
  ],
};

function initMap() {
  new google.maps.Map(mapElement, mapOptions);
}
