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
              v-model="userForm.websiteName"
              label="Nome do site*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="userForm.webAddress"
              label="Endereço Web*"
              required
            ></v-text-field>
          </v-col>

          <v-divider></v-divider>

          <v-col cols="12">
            <v-textarea
              v-model="userForm.permissionText"
              label="Texo de permissão de notificação"
              counter
              no-resize
              :rules="textRule"
              rows="4"
            ></v-textarea>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="userForm.allowButton"
              label="Texto botão permitir"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field v-model="userForm.denyButton" label="Texto botão negar"></v-text-field>
          </v-col>

          <v-divider></v-divider>

          <v-col cols="12" sm="6">
            <v-text-field v-model="userForm.titleText" label="Título"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="userForm.welcomeText"
              label="Texo de boas vindas"
              counter
              no-resize
              :rules="textRule"
              rows="4"
            ></v-textarea>
          </v-col>

          <v-checkbox-btn v-model="enableLink" class="pe-2"></v-checkbox-btn>
          <v-text-field
            v-model="userForm.destinationLink"
            :disabled="!enableLink"
            hide-details
            label="Link de destino"
          ></v-text-field>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" variant="text" @click="resetUserForm()"> Clear </v-btn>
      <v-btn color="blue-darken-1" variant="text"> Salvar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue';

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

const userFormData = ref({
  websiteName: '',
  webAddress: '',
  permissionText: '',
  allowButton: '',
  denyButton: '',
  titleText: '',
  welcomeText: '',
  destinationLink: ''
});
// const websiteName = ref('');
// const webAddress = ref('');
// const permissionText = ref('');
// const allowButton = ref('');
// const denyButton = ref('');
// const titleText = ref('');
// const welcomeText = ref('');
// const destinationLink = ref('');

const textRule = ref([(v: string) => v.length <= 500 || 'Max 500 caracteres']);

const enableLink = ref(false);

const userForm = reactive(getInitialFormData());

const resetUserForm = () => {
  Object.assign(userForm, getInitialFormData());
  enableLink;
};
</script>

<style scoped></style>
