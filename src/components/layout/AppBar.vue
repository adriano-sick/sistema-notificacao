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
        <AddAppDialog></AddAppDialog>

        <NotificationHistoryView></NotificationHistoryView>
        <v-list-item prepend-icon="mdi-star" title="Home" @click.prevent="homeView"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 300px"></v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AddAppDialog from '@/components/dialog/AddAppDialog.vue';
import NotificationHistoryView from '@/views/NotificationHistoryView.vue';

const router = useRouter();

const homeView = () => {
  router.push({ name: 'home' });
};

const configApp = () => {
  router.push({ name: 'home' });
};
</script>

<style scoped></style>
