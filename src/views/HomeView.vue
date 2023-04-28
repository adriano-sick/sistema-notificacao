<template>
  <v-sheet class="bg-deep-purple home">
    <v-card class="mx-auto px-6 py-8" min-width="428">
      <v-form v-model="form">
        <v-text-field
          v-model="user.email"
          :readonly="loading"
          class="mb-2"
          clearable
          label="Email"
          outlined
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          :readonly="loading"
          clearable
          label="Password"
          placeholder="Enter your password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="() => (showPassword = !showPassword)"
          outlined
        ></v-text-field>

        <br />

        <v-checkbox v-model="rememberMe" label="Lembrar-me" hide-details></v-checkbox>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          @click.prevent="onSubmit"
        >
          Sign In
        </v-btn>
      </v-form>

      <br />

      <v-btn color="red" size="large" type="submit" variant="elevated" @click.prevent="loginView">
        Login
      </v-btn>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/data/UserStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref(false);
const rememberMe = ref(false);
const showPassword = ref(false);
const loading = ref(false);

const user = ref({
  email: '',
  password: ''
});

const userStore = useUserStore();

// const rules = {
//   required: (value: string) => !!value || 'Campo obrigatório',
//   email: (value: string) =>
//     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value) || 'E-mail inválido',
//   password: (value: string) =>
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) ||
//     'Senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.'
// };

const onSubmit = () => {
  console.log(user.value.email);
  console.log(user.value.password);

  // Submit to API
  if (!form.value) return;

  userStore.getUser(user.value.email, user.value.password);

  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
};

const router = useRouter();

const loginView = () => {
  router.push({ name: 'login' });
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
  }
}
</style>
