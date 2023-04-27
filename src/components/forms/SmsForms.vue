<template>
  <v-card>
    <v-card-title>
      <span class="text-h6">Configurações SMS push</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="smsForm.smsProvider"
              label="Provedor de SMS*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="smsForm.login" label="Login*" required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="smsForm.password"
              label="Senha*"
              type="password"
              required
            ></v-text-field>
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
import { reactive } from 'vue';

const getInitialFormData = () => ({
  smsProvider: '',
  login: '',
  password: ''
});

const smsForm = reactive(getInitialFormData());

const resetEmailForm = () => {
  Object.assign(smsForm, getInitialFormData());
};
</script>

<style scoped></style>
