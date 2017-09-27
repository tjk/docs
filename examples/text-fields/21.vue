<template>
  <v-app class="pa-5">
    <v-content>
      <v-checkbox label="Show progress bar" v-model="loading"></v-checkbox>
      <v-checkbox label="Custom progress bar" v-model="custom" :disabled="!loading"></v-checkbox>
      <v-text-field color="cyan darken" label="Text field" placeholder="Type at least 10 characters" v-model="val" :async-loading="loading">
        <v-progress-linear v-if="custom" slot="progress" :value="progress" height="7" :color="color"></v-progress-linear>
      </v-text-field>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    val: '',
    custom: true,
    loading: true
  }),
  computed: {
    progress() { return Math.min(100, this.val.length * 10) },
    color() { return ['error', 'warning', 'success'][Math.floor(this.progress / 40)] }
  }
}
</script>
