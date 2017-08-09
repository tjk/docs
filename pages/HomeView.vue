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
      v-parallax(src="/static/doc-images/vbanner.jpg" height="450")
        v-container(style="max-width: 1440px" fluid fill-height grid-list-xl)
          v-layout(align-center justify-space-between wrap)
            v-flex(xs12 sm12 md8).text-xs-center.text-md-left
              h1.white--text.display-2.hidden-sm-and-down Material Component Framework
              h1.white--text.headline.hidden-sm-and-up Material Component Framework
              div.mb-3 Supercharge your development with the power of Vue and Material Design
              a(href="https://github.com/vuetifyjs/vuetify" target="_blank" title="Github")
                v-icon(x-large dark).ml-0.mr-3 fa-github-square
              a(href="https://twitter.com/vuetifyjs" target="_blank" title="Twitter")
                v-icon(x-large dark).ml-0.mr-3 fa-twitter-square
              a(href="https://www.facebook.com/vuetifyjs" target="_blank" title="Facebook")
                v-icon(x-large dark).ml-0.mr-3 fa-facebook-square
              a(href="https://chat.vuetifyjs.com" target="_blank" title="Community")
                v-icon(x-large dark).ml-0.mr-3 fa-comments
            v-flex(xs12 md4).text-xs-right.my-3
              v-btn(dark large to="/vuetify/quick-start").px-3.mx-0.blue.lighten-2 Get Started Now
                v-icon(right) chevron_right
              br
              small
                em Takes less than a minute!

    section#features
      v-container(grid-list-xl fluid style="max-width: 1440px")
        v-layout(row wrap justify-space-around)
          v-flex(xs12 sm6 md4)
            v-card
              v-card-media(
                height="180px"
                src="/static/vuetify_cli.svg"
              )
              v-card-title.headline Premade Templates
              v-card-text Vuetify comes ready to go with 5 pre-made vue-cli templates. Ranging from a simple html to a full blown SSR (server side rendered) application.
              v-divider
              v-card-actions.layout.justify-center.px-2
                v-btn(flat primary block to="/layout/pre-defined") See more
          v-flex(xs12 sm6 md4)
            v-card
              v-card-media(
                height="180px"
                src="/static/vuetify_layout2.svg"
              )
              v-card-title.headline Custom layouts
              v-card-text Each and every available layout from the Material design spec is at your disposal. Create unique and flexible user interfaces that fit the scope of any task.
              v-divider
              v-card-actions.layout.justify-center.px-2
                v-btn(flat primary block to="/layout/grid") See more
          v-flex(xs12 sm6 md4)
            v-card
              v-card-media(
                height="180px"
                src="/static/vuetify_sizes.svg"
              )
              v-card-title.headline Material design
              v-card-text Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.
              v-divider
              v-card-actions.layout.justify-center.px-2
                v-btn(flat primary block to="style/colors") See more

    section#support.py-5.grey.lighten-4.mb-0
      v-container(fluid)
        v-layout(row wrap).text-xs-center
          v-flex(xs12).mb-5
            h4.headline.pb-3.grey--text.text--lighten-1 Support Vuetify.js
            p Has Vuetify helped you create an amazing application?<br>You can show your support by making a <strong>donation</strong> in one of two ways:
          v-flex(xs12 sm3 offset-sm3).mb-3
            a(
              href="https://www.patreon.com/vuetify"
              target="_blank" rel="noopener"
            )
              img(src="/static/doc-images/patreon.png" width="125px" title="Patreon" alt="Patreon")
          v-flex(xs12 sm3).mb-5
            a(
              href="https://paypal.me/vuetify"
              target="_blank" rel="noopener"
            )
              img(src="/static/doc-images/paypal.png" width="125px" title="Paypal" alt="Paypal")
          v-flex(xs12).text-xs-center
            v-btn(outline success round to="/vuetify/sponsors-and-backers") Become a backer
    v-footer(style="height: 50px;").secondary.white--text.pa-3.layout.justify-space-between
      span &copy; 2017 Vuetify, LLC
      a(href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener").white--text MIT License
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
    h1, h1 + div
      font-weight: 300 !important
    
    .parallax__content
      padding: 0

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
</style>
