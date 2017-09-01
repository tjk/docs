<template lang="pug">
  v-toolbar(:class="[$store.state.currentColor]" fixed dark)#main-toolbar
    v-toolbar-side-icon(@click.stop="toggleSidebar")

    transition(name="slide" mode="out-in")
      v-toolbar-title(
        v-html="$store.state.h1"
        style="position: relative"
        v-bind:key="$store.state.h1"
        class="d-flex"
      )
    v-spacer
    v-btn(
      icon
      href="https://www.twitch.tv/johnleider"
      target="_blank"
      rel="noopener"
      large
      v-tooltip:left="{ html: 'Twitch stream' }"
    ).mr-3
      v-icon fa-fw fa-twitch
</template>

<script>
  export default {
    name: 'toolbar',

    methods: {
      toggleSidebar () {
        this.$store.commit('vuetify/SIDEBAR', !this.$store.state.sidebar)
      }
    }
  }
</script>
