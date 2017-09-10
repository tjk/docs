<template>
  <v-select
    label="Your favorite hobbies"
    chips
    tags
    solo
    prepend-icon="filter_list"
    append-icon=""
    clearable
  >
    <template slot="selection" scope="data">
      <v-chip close>
        <strong>{{ data.item }}</strong>&nbsp;
        <span>(interest)</span>
      </v-chip>
    </template>
  </v-select>
</template>
