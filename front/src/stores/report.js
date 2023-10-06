import { defineStore } from "pinia";

export default defineStore("reportData", {
  state: () => ({
    reportData: {
      statut: "",
      description: "",
      date: "",
      idLamp: "",
      idUser: "",
    },
  }),
  actions: {
    async addReport(newData) {
      // Make the API call
      const response = await fetch("http://localhost:3000/reports", {
        method: "POST",
        body: JSON.stringify(newData),
      });

      // Handle the response
      if (response.status === 200) {
        const reportData = await response.json();
        this.reportData = reportData;
      } else {
        console.log("Error creating report:", response.status);
      }
    },
  },
});