<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from "@/components/Menu/MenuComponent.vue";
import Data from "@/components/Data/DataComponent.vue"
</script>

<template>
  <div>
    <!-- Composant side bar -->
    <RouterView />
    <Menu></Menu>
    <Data></Data>
  </div>
</template>