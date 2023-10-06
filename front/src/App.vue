<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from "@/components/Menu/MenuComponent.vue";
</script>

<template>
  <div>
    <!-- Composant side bar -->
    <RouterView />
    <Menu></Menu>
  </div>
</template>