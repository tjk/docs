<template>
  <div>
    <v-alert success icon="new_releases" :input-value="true">
      This is a success alert with a custom icon.
    </v-alert>

    <v-alert error hide-icon :input-value="true">
      This is an error alert with no icon.
    </v-alert>
  </div>
</template>
