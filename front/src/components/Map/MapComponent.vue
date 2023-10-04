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
      map: null,
    };
  },
  
  mounted() {
    this.map = L.map("mapContainer").setView([48.8566, 2.3522], 13);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    }).addTo(this.map);
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
  /* width: 100vw;
  height: 100vh; */
  z-index: 1;
}
</style>
