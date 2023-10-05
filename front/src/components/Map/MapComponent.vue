<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "LeafletMap",
  data() {
    return {
      jsonData: [],
      map: null,
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.map = L.map("mapContainer").setView([latitude, longitude], 18);

        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors",
        }).addTo(this.map);

        this.loadJsonData();
      },
      (error) => {
        console.error("Erreur lors de la géolocalisation : ", error);
        this.map = L.map("mapContainer").setView([48.8566, 2.3522], 18);

        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors",
        }).addTo(this.map);

        this.loadJsonData();
      }
    );
  },
  methods: {
    loadJsonData() {
      fetch("/eclairage-public.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur réseau");
          }
          return response.json();
        })
        .then((data) => {
          this.jsonData = data;
          this.addMarkers();
        })
        .catch((error) => {
          console.error("Erreur lors du chargement des données JSON", error);
        });
    },
    addMarkers() {
      const visibleBounds = this.map.getBounds();

      this.jsonData.forEach((item) => {
        if (visibleBounds.contains(L.latLng(item.geo_point_2d.lat, item.geo_point_2d.lon))) {
          const marker = L.marker([item.geo_point_2d.lat, item.geo_point_2d.lon]);
          marker.addTo(this.map);
        }
      });
    },
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style scoped>
#mapContainer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>
