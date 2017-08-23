<template>
  <div id="example-4g">
    <v-container fluid>
      <v-layout row justify-space-between>
        <v-card dark class="primary">
          <v-card-text>one</v-card-text>
        </v-card>
        <v-card dark class="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
        <v-card dark class="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-layout>
      <v-layout row justify-space-around>
        <v-card dark class="primary">
          <v-card-text>one</v-card-text>
        </v-card>
        <v-card dark class="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
        <v-card dark class="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  #example-4g {
    color: #fff;
    text-align: center;
  }

  #example-4g .card {
    margin-bottom: 16px;
  }
</style>
