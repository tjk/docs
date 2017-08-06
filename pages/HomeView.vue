<template lang="pug">
  div#home-view
    v-navigation-drawer(
      v-model="drawer"
      dark
      temporary
    )
      v-list
        v-list-tile(to="vuetify/quick-start")
          v-list-tile-title Documentation
        v-list-tile(href="https://github.com/vuetifyjs/vuetify/releases" target="_blank" rel="noopener")
          v-list-tile-title Releases
        v-list-tile(href="https://chat.vuetifyjs.com" target="_blank" rel="noopener")
          v-list-tile-title Support

    v-toolbar(fixed :class="[toolbar ? 'toolbar--home' : 'transparent elevation-0']" dark)
      img(src="/static/v.png" height="38px").mr-3
      span.headline Vuetify.js
      v-spacer
      v-toolbar-side-icon(@click.stop="drawer = !drawer").hidden-md-and-up
      v-toolbar-items.hidden-sm-and-down
        v-btn(flat dark to="/vuetify/quick-start") Quick Start
        v-btn(flat dark href="https://github.com/vuetifyjs/vuetify/releases" target="_blank" rel="noopener") Releases
        v-btn(flat dark href="https://chat.vuetifyjs.com" target="_blank" rel="noopener") Support

    section#hero.elevation-12
      v-parallax(src="/static/doc-images/vbanner.jpg" height="500")
        v-layout
          v-flex(offset-md1)
            h1.white--text.display-2 Material Component Framework
            div.mb-3 Supercharge your development with the power of Vue and Material Design
            a(href="https://github.com/vuetifyjs/vuetify" target="_blank" title="Github")
              v-icon(x-large dark).ml-0.mr-3 fa-github-square
            a(href="https://twitter.com/vuetifyjs" target="_blank" title="Twitter")
              v-icon(x-large dark).ml-0.mr-3 fa-twitter-square
            a(href="https://www.facebook.com/vuetifyjs" target="_blank" title="Facebook")
              v-icon(x-large dark).ml-0.mr-3 fa-facebook-square
            a(href="https://chat.vuetifyjs.com" target="_blank" title="Community")
              v-icon(x-large dark).ml-0.mr-3 fa-comments

    section#features
      v-container(grid-list-xl fluid style="max-width: 1440px")
        v-layout(row wrap justify-space-around)
          v-flex(xs12 sm6 md4 lg3)
            v-card
              v-card-media(
                height="180px"
                src="/static/vuetify_cli.svg"
              )
              v-card-title.headline Premade Templates
              v-card-text Vuetify comes ready to go with 5 pre-made vue-cli templates. Ranging from a simple html to a full blown SSR (server side rendered) application.
              v-divider
              v-card-actions.layout.justify-center
                v-btn(flat primary block) See more
          v-flex(xs12 sm6 md4 lg3)
            v-card
              v-card-media(
                height="180px"
                src="/static/vuetify_layout2.svg"
              )
              v-card-title.headline Custom layouts
              v-card-text Each and every available layout from the Material design spec is at your disposal. Create unique and flexible user interfaces that fit the scope of any task.
              v-divider
              v-card-actions.layout.justify-center
                v-btn(flat primary block) See more
          v-flex(xs12 sm6 md4 lg3)
            v-card
              v-card-media(
                height="180px"
                src="/static/vuetify_sizes.svg"
              )
              v-card-title.headline Material design
              v-card-text Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.
              v-divider
              v-card-actions.layout.justify-center
                v-btn(flat primary block) See more

    section#support
      v-card(tile flat height="198px").grey.lighten-3
        v-layout(align-center fill-height)
          v-flex
    v-footer(style="height: 100px;").secondary.white--text.py-3
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        sponsors: [
          { title: 'BrowserStack', href: 'https://www.browserstack.com/', src: '/static/doc-images/browser-stack.svg' },
          { title: 'Cloudflare', href: 'https://www.cloudflare.com/', src: '/static/doc-images/cloudflare.svg' }
        ],
        toolbar: false,
        usefulLinks: [
          {
            href: 'https://vuejs.org',
            text: 'Vue.js'
          },
          {
            href: 'https://material.io/guidelines/',
            text: 'Material Design'
          }
        ]
      }
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll, { passive: true })
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll, { passive: true })
    },
    methods: {
      onScroll () {
        this.toolbar = window.scrollY > 0
      }
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/settings/_colors'
  
  #home-view
    section
      margin-bottom: 0    

    .toolbar .headline
      font-weight: 300 !important

    #hero
      a
        text-decoration: none

      .parallax .icon
        color: rgba(#fff, .5)
        
        &:hover
          color: rgba(#fff, .9)

    #features
      .card__text
        height: 140px

  // #home-view
  //   .toolbar--home
  //     background: #132563

  //   #support
  //     a
  //       text-decoration: none

  //   #hero
  //     .btn
  //       width: 190px

  //   #sponsors img
  //     max-height: 60px

  //   div.grey--text
  //     line-height: 2

  // #features
  //   .card__column.transparent
  //     height: 150px !important
</style>
