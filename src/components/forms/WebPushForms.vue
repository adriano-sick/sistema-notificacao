<template>
  <v-card>
    <v-card-title>
      <span class="text-h6">Configurações Web Push</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="webPushForm.websiteName"
              label="Nome do site*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="webPushForm.webAddress"
              label="Endereço Web*"
              required
            ></v-text-field>
          </v-col>

          <v-divider></v-divider>

          <v-col cols="12">
            <v-textarea
              v-model="webPushForm.permissionText"
              label="Texo de permissão de notificação"
              counter
              no-resize
              :rules="textRule"
              rows="4"
            ></v-textarea>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="webPushForm.allowButton"
              label="Texto botão permitir"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field v-model="webPushForm.denyButton" label="Texto botão negar"></v-text-field>
          </v-col>

          <v-divider></v-divider>

          <v-col cols="12" sm="6">
            <v-text-field v-model="webPushForm.titleText" label="Título"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="webPushForm.welcomeText"
              label="Texo de boas vindas"
              counter
              no-resize
              :rules="textRule"
              rows="4"
            ></v-textarea>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="webPushForm.destinationLink"
              hide-details
              label="Link de destino"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" variant="text" @click="resetUserForm()"> Limpar </v-btn>
      <v-btn color="blue-darken-1" variant="text"> Salvar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const getInitialFormData = () => ({
  websiteName: '',
  webAddress: '',
  permissionText: '',
  allowButton: '',
  denyButton: '',
  titleText: '',
  welcomeText: '',
  destinationLink: ''
});

const webPushForm = reactive(getInitialFormData());

const textRule = ref([(v: string) => v.length <= 500 || 'Max 500 caracteres']);

const resetUserForm = () => {
  Object.assign(webPushForm, getInitialFormData());
};
</script>

<style scoped></style>
