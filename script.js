let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.160760, lng: -73.330849 },
    zoom: 18,
    mapTypeId: 'satellite'

  });
}

initMap();