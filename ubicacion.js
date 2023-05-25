// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -33.02420936144913, lng: -71.55600477465272 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;