<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-list-item prepend-icon="mdi-folder" title="Produtos" v-bind="props"></v-list-item>
    </template>
    <v-card height="640">
      <v-card-title>
        <span class="text-h4">Produtos</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <ul>
              <li>
                <b>ID - Nome - Descrição</b>
              </li>
            </ul>
          </v-row>
          <v-row>
            <ul>
              <li v-for="item in items" :key="item.name">
                {{ item.id }} - {{ item.name }} - {{ item.descricao }}
                <v-btn>excluir</v-btn>
              </li>
            </ul>
          </v-row>
          <br>
          <v-row>
            <h3>Adicionar produto:</h3>
          </v-row>
          <v-row>
            <input type="text" placeholder="Nome">
            <input type="text" placeholder="descrição">
            <v-btn>adicionar</v-btn>
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

const items = 
  [
    { name: 'Item1', id: '001', descricao: 'Produto 1' },
    { name: 'Item2', id: '002', descricao: 'Produto 2' },
    { name: 'Item3', id: '003', descricao: 'Produto 3' },
    { name: 'Item4', id: '004', descricao: 'Produto 4' },
    { name: 'Item5', id: '005', descricao: 'Produto 5' },
    { name: 'Item6', id: '006', descricao: 'Produto 6' },
    { name: 'Item7', id: '007', descricao: 'Produto 7' },
    { name: 'Item8', id: '008', descricao: 'Produto 8' },
    { name: 'Item9', id: '009', descricao: 'Produto 9' },
  ]

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
