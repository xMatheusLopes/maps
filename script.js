// Initialize and add the map
function initMap() {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    // The location of Uluru
    const uluru = { lat, lng };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: 'https://developers.google.com/static/maps/documentation/javascript/images/custom-marker.png'
    });
  });

}
  
window.initMap = initMap;