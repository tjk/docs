<template>
  <div class="text-xs-center">
    <v-menu offset-y v-model="showMenu" absolute full-width>
      <v-card class="portrait" img="/static/doc-images/cards/girl.jpg" height="300px" slot="activator"></v-card>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      showMenu: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    })
  }
</script>

<style lang="stylus" scoped>
  .portrait.card
    margin: 0 auto
    max-width: 600px
    width: 100%
</style>
