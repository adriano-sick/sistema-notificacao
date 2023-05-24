<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-list-item
        prepend-icon="mdi-folder"
        title="Precos"
        v-bind="props"
      ></v-list-item>
    </template>
    <v-card height="640">
      <v-card-title>
        <span class="text-h4">Tabela de Preços</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
           
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="resetUserForm"> Fechar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import WebPushFormsVue from '@/components/forms/WebPushForms.vue';
import EmailFormsVue from '@/components/forms/EmailForms.vue';
import SmsFormsVue from '@/components/forms/SmsForms.vue';

const dialog = ref(false);

const channels = ref(['Web Push', 'E-mail', 'SMS']);

const enableForms = () => ({
  webPushFormEnable: false,
  emailFormEnable: false,
  smsFormEnable: false
});

const forms = reactive(enableForms());

const resetUserForm = () => {
  Object.assign(forms, enableForms());
  dialog.value = false;
};
</script>

<style scoped></style>
