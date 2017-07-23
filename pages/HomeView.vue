<template lang="pug">
  div#home-view.white
    v-toolbar(fixed :class="[toolbar ? 'toolbar--home' : 'transparent elevation-0']" dark)
      img(src="/static/v.png" height="38px")
      v-spacer
      v-toolbar-items
        v-btn(flat dark to="/vuetify/quick-start") Documentation
        v-btn(flat dark tag="a" href="https://github.com/vuetifyjs/vuetify/releases" target="_blank" rel="noopener") Updates

    section#hero.elevation-12
      v-parallax(src="/static/doc-images/vbanner.jpg" height="400")
        v-layout(row align-vert-center align-horiz-center)
          v-flex(xs12).text-xs-center
            h1.grey--text.text--lighten-4.display-2 Vuetify.js
            div.grey--text.text--lighten-4.headline.hidden-xs-only Material Component Framework
            div.mt-5
              v-btn(
                large
                tag="a"
                href="https://github.com/vuetifyjs/vuetify"
              ).grey.lighten-2
                v-icon(left medium) fa-github
                span Github
              v-btn(dark large to="/vuetify/quick-start").green.lighten-2
                span Get Started
                v-icon(right dark) chevron_right

    section#features
      div.text-xs-center
        h2.display-2 Supercharge your Development
        span.headline With the power of Vue and Material Design

      v-container(style="max-width: 1024px").mt-5
        v-layout(row wrap)
          v-flex(xs12).my-5
            v-layout(row wrap)
              v-flex(xs12 sm6 layout row align-center)
                v-card.transparent.elevation-0.pa-3
                  v-card-title.pl-0.pt-0.headline Premade Templates
                  div.grey--text.text--darken-1 Vuetify comes ready to go with 5 pre-made vue-cli templates. Ranging from a simple html to a full blown SSR (server side rendered) application. No matter what the project, you are ready to go in minutes with your next great idea.
              v-flex(xs12 sm6)
                router-link(to="/vuetify/quick-start")
                  v-card(
                    hover
                    height="280px"
                    img="/static/vuetify_cli.svg"
                  )
          v-flex(xs12).hidden-sm-and-up
            v-divider
          v-flex(xs12).my-5
            v-layout(row wrap)
              v-flex(xs12 sm6)
                router-link(to="/layout/pre-defined")
                  v-card(
                    hover
                    height="280px"
                    img="/static/vuetify_layout2.svg"
                  )
              v-flex(xs12 sm6 layout row align-center)
                v-card.transparent.elevation-0.pa-3
                  v-card-title.pl-0.pt-0.headline Custom layouts
                  div.grey--text.text--darken-1 Each and every available layout from the Material design spec is at your disposal. Create unique and flexible user interfaces that fit the scope of any task.
          v-flex(xs12).hidden-sm-and-up
            v-divider
          v-flex(xs12).my-5
            v-layout(row wrap)
              v-flex(xs12 sm6 layout row align-center)
                v-card.transparent.elevation-0.pa-3
                  v-card-title.pl-0.pt-0.headline Semantic components
                  div.grey--text.text--darken-1 Every component has been meticulously crafted to offer the easiest, most understandable interface and robust api of properties that will customize the experience delivered in your next application.
              v-flex(xs12 sm6)
                router-link(to="/components/alerts")
                  v-card(
                    hover
                    height="280px"
                    img="/static/vuetify_semantic.svg"
                  )
          v-flex(xs12).hidden-sm-and-up
            v-divider
          v-flex(xs12).my-5
            v-layout(row wrap)
              v-flex(xs12 sm6)
                a(
                  target="_blank" 
                  href="https://material.io/guidelines/"
                )
                  v-card(
                    hover
                    height="280px"
                    img="/static/vuetify_sizes.svg"
                  )
              v-flex(xs12 sm6 layout align-center)
                v-card.transparent.elevation-0.pa-3
                  v-card-title.pl-0.pt-0.headline Material design framework
                  div.grey--text.text--darken-1 Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.
    v-divider
    section#sponsors.py-3.mb-0
      v-container( fluid)
        v-layout(row wrap)
          v-flex(xs10 offset-xs1).text-xs-center
            h4.headline.text-xs-center.mb-5 Vuetify.js is proudly sponsored by
            div(v-for="sponsor in sponsors").mb-5
              a(:href="sponsor.href" target="_blank" :title="sponsor.title")
                img(:src="sponsor.src")
          v-flex(xs12).text-xs-center
            v-btn(outline success round to="/vuetify/sponsors-and-backers") Become a backer

    section#support.py-5.grey.lighten-4.mb-0
      v-container(fluid)
        v-layout(row wrap).text-xs-center
          v-flex(xs12).mb-5
            h4.headline.pb-3 Support Vuetify.js
            p Has Vuetify helped you create an amazing application?<br>You can show your support by making a <strong>donation</strong> in one of two ways:
          v-flex(xs12 sm3 offset-sm3).mb-3
            a(
              href="https://www.patreon.com/vuetify"
              target="_blank" rel="noopener"
            ).black--text
              div.display-1.mb-2 Patreon
              img(src="/static/doc-images/patreon.png" width="125px")
          v-flex(xs12 sm3).mb-3
            a(
              href="https://paypal.me/vuetify"
              target="_blank" rel="noopener"
            ).black--text
              div.display-1.mb-2 Paypal
              img(src="/static/doc-images/paypal.png" width="125px")

    v-footer(style="height: auto;").secondary.white--text.py-3
      v-layout(row justify-center flex wrap)
        v-flex(xs3 offset-xs2)
          v-list(dark dense)
            v-subheader(dark) Useful Links
            v-list-tile(
              tag="div"
              v-for="link in usefulLinks"
              v-bind:key="link.title"
            )
              v-list-tile-content
                a(
                  :href="link.href"
                  target="_blank"
                  v-text="link.text"
                ).white--text
        v-flex(xs3)
          v-list(dark dense)
            v-subheader(dark) Legal
            v-list-tile(tag="div")
              v-list-tile-content
                a(
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                ).white--text MIT License
            v-list-tile(tag="div")
              v-list-tile-content &copy; {{ new Date().getFullYear() }} Vuetify LLC
        v-flex(xs12).text-xs-center
          v-btn(icon dark href="https://github.com/vuetifyjs/vuetify")
            v-icon fa-github
          v-btn(icon dark href="https://twitter.com/vuetifyjs")
            v-icon fa-twitter
          v-btn(icon dark href="https://www.facebook.com/vuetifyjs")
            v-icon fa-facebook
</template>

<script>
  export default {
    data () {
      return {
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
    .toolbar--home
      background: #132563

    #support
      a
        text-decoration: none

    #hero
      .btn
        width: 190px
        
    #sponsors img
      max-height: 60px

    div.grey--text
      line-height: 2

  #features
    .card__column.transparent
      height: 150px !important
</style>
