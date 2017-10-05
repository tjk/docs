<template>
  <div>
    <div class="text-xs-center">
      <v-btn primary @click="alert = !alert">Toggle</v-btn>
    </div>
    <v-alert
      color="success"
      icon="check_circle"
      :value="alert"
      transition="scale-transition"
    >
      This is a success alert.
    </v-alert>
  </div>
</template>

<script>
  export default {
    data: () => ({
      alert: true
    })
  }
</script>
