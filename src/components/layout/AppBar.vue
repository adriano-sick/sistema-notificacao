<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover rail rounded="lg">
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <config-dialog></config-dialog>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Home" @click.prevent="homeView"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 300px"></v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ConfigDialog from '@/components/dialog/ConfigAppDialog.vue';

const router = useRouter();

const homeView = () => {
  router.push({ name: 'home' });
};

const configApp = () => {
  router.push({ name: 'home' });
};
</script>

<style scoped></style>
