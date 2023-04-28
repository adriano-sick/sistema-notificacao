<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-list-item
        prepend-icon="mdi-folder"
        title="Adicionar novo App"
        v-bind="props"
      ></v-list-item>
    </template>
    <v-card height="640">
      <v-card-title>
        <span class="text-h4">Adicionar novo aplicativo</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="Nome do app*" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-checkbox-btn
                v-model="forms.webPushFormEnable"
                :label="channels[0]"
                class="pt-2"
              ></v-checkbox-btn>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-checkbox-btn
                v-model="forms.emailFormEnable"
                :label="channels[1]"
                class="pt-2"
              ></v-checkbox-btn>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-checkbox-btn
                v-model="forms.smsFormEnable"
                :label="channels[2]"
                class="pt-2"
              ></v-checkbox-btn>
            </v-col>

            <v-col cols="12" sm="12">
              <v-expand-transition>
                <div v-show="forms.webPushFormEnable">
                  <WebPushFormsVue></WebPushFormsVue>
                </div>
              </v-expand-transition>
            </v-col>

            <v-col cols="12" sm="12">
              <v-expand-transition>
                <div v-show="forms.emailFormEnable">
                  <EmailFormsVue></EmailFormsVue>
                </div>
              </v-expand-transition>
            </v-col>

            <v-col cols="12" sm="12">
              <v-expand-transition>
                <div v-show="forms.smsFormEnable">
                  <SmsFormsVue></SmsFormsVue>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </v-container>
        <small>*Campos obrigatórios.</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="resetUserForm"> Fechar </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="resetUserForm"> Salvar </v-btn>
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
