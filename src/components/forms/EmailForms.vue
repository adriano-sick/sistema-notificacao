<template>
  <v-card>
    <v-card-title>
      <span class="text-h6">Configurações Email push</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="emailForm.serverName"
              label="Nome do Servidor SMTP*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="emailForm.port" label="Porta de envio*" required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="emailForm.login" label="Login*" required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="emailForm.password"
              label="Senha*"
              type="password"
              required
            ></v-text-field>
          </v-col>

          <v-divider></v-divider>

          <v-col cols="12" sm="6">
            <v-text-field v-model="emailForm.senderName" label="Nome do remetente"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="emailForm.senderEmail" label="Email do remetente"></v-text-field>
          </v-col>

          <v-divider></v-divider>
          <br />

          <v-col cols="12" sm="6">
            <v-file-input
              :key="clearFiles"
              accept="text/html"
              chips
              label="Template"
              hint="Apenas arquivos .html são aceitos"
              persistent-hint
            >
            </v-file-input>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" variant="text" @click="resetEmailForm()"> Limpar </v-btn>
      <v-btn color="blue-darken-1" variant="text"> Salvar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const getInitialFormData = () => ({
  serverName: '',
  port: '',
  login: '',
  password: '',
  senderName: '',
  senderEmail: '',
  welcomeText: ''
});

const clearFiles = ref(0);

const emailForm = reactive(getInitialFormData());

const resetEmailForm = () => {
  Object.assign(emailForm, getInitialFormData());
  clearFiles.value++;
};
</script>

<style scoped></style>
