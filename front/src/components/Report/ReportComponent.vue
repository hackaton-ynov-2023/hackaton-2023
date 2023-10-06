<template>
  <div class="report">
    <h2>Signaler un problème avec le lampadaire ID: {{ $route.params.id }}</h2>

    <!-- Formulaire de signalement -->
    <form @submit.prevent="submitReport">
      <div class="form-group">
        <label for="description">Description du problème :</label>
        <textarea
          id="description"
          v-model="description"
          rows="4"
          cols="50"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="image">Image (facultatif) :</label>
        <input type="file" id="image" @change="handleImageUpload" accept="image/*">
      </div>

      <button type="submit">Envoyer le signalement</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: '',
      image: null, // Pour stocker l'image sélectionnée
    };
  },
  methods: {
    submitReport() {
      // Envoyez le rapport avec les données au backend ici
      const reportData = {
        id: this.$route.params.id,
        description: this.description,
        image: this.image,
      };

      console.log(reportData);

      // Envoyez reportData au backend (via API, par exemple)

      // Réinitialisez les données du formulaire après l'envoi
      this.description = "";
      this.image = null;

      // Redirigez l'utilisateur vers une autre page après l'envoi (par exemple, la page d'accueil)
      this.$router.push("/");
    },
    handleImageUpload(event) {
      // Gérez le téléchargement de l'image ici (stockage temporaire, traitement, etc.)
      // Dans cet exemple, nous stockons simplement l'image sélectionnée dans la variable 'image'
      this.image = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.report {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 5;
}

.report h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

input[type="file"] {
  width: 100%;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>