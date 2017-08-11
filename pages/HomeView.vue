<style lang="stylus" scoped>



//temp fix
$grid-breakpoints := {
  xs: 0
  sm: 600px
  md: 1024px
  lg: (1440px - 16px) // Desktop gets a 16dp reduction
  xl: (1920px - 16px) // https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
}
//temp fix
$display-breakpoints := {
  xs-only: "only screen and (max-width: %s)" % ($grid-breakpoints.sm - 1)
  sm-only: "only screen and (min-width: %s) and (max-width: %s)" % ($grid-breakpoints.sm ($grid-breakpoints.md  - 1))
  sm-and-down: "only screen and (max-width: %s)" % ($grid-breakpoints.md - 1)
  sm-and-up: "only screen and (min-width: %s)" % $grid-breakpoints.sm
  md-only: "only screen and (min-width: %s) and (max-width: %s)" % ($grid-breakpoints.md ($grid-breakpoints.lg  - 1))
  md-and-down: "only screen and (max-width: %s )" % ($grid-breakpoints.lg - 1)
  md-and-up: "only screen and (min-width: %s)" % $grid-breakpoints.md
  lg-only: "only screen and (min-width: %s) and (max-width: %s)" % ($grid-breakpoints.lg ($grid-breakpoints.xl - 1))
  lg-and-down: "only screen and (max-width: (%s - 1))" % $grid-breakpoints.xl
  lg-and-up: "only screen and (min-width: %s)" % $grid-breakpoints.lg
  xl-only: "only screen and (min-width: %s)" % $grid-breakpoints.xl
}

  //might want to edit vuetify grid to make bigger container gutters at biggers sizes. tiny gutters look pretty bad
  @media $display-breakpoints.md-and-up
    .container
      padding-left: 80px
      padding-right: 80px

  #home-view
    background white
    .toolbar
      opacity 1
      transition opacity .25s ease-in-out
      &.hidden
        opacity 0
      .btn
        text-transform none
        font-size 18px
        font-weight 400
        color #777777

    #hero
      margin 0
      padding-top: 4em
      h1
        font-size 48px
        color #1697F6
        font-weight 400
        margin-top .4em
        margin-bottom .3em
      h2
        font-size 24px
        margin-bottom 2.5em
        line-height 1.1em
        color #767676
        font-weight 300
      img.logo
        height 125px

      @media $display-breakpoints.sm-only
        h1
          font-size 55px
          margin-top .33em
          margin-bottom .3em
        h2
          font-size 36px
          margin-bottom 1.5em
        img.logo
          height 125px

      @media $display-breakpoints.md-only
        padding-top: 4em
        h1, h2, .btn
          margin-left: 20px
        h1
          font-size 50px
          margin-top 0
          margin-top 1.2em
          margin-bottom .2em
        h2
          margin-bottom 1em
          font-size 32px
        img.logo
          height 250px

      @media $display-breakpoints.lg-only
        padding-top 4em
        h1
          font-size 50px
          margin-bottom .2em
          margin-top 2em
        h2
          font-size 44px
          margin-bottom 1em
        img.logo
          height 350px

      @media $display-breakpoints.xl-only
        padding-top 5em
        h1
          font-size 60px
          margin-top 0
          margin-top 2em
          margin-bottom .2em
        h2
          margin-bottom .8em
          font-size 55px
        img.logo
          height 450px

    #section-body
      background url('/static/doc-images/slant-repeat.svg')  50% 0
      background-size 100%
      @media $display-breakpoints.xs-only
        background-size 200%
      section
        position relative
        .card
          z-index 1
        h2
          font-size 28px
          font-weight 300
          color #767676

        &#features
          position relative
          padding-top 60px
          &:before
            content ''
            position absolute
            left 0
            right 0
            top 0
            height 100vh
            background url('/static/doc-images/slant-header.svg') no-repeat top center
            background-size 100%
            @media $display-breakpoints.xs-only
              background-size 100%

          img
            width 80%
          h3
            font-size 20px
            font-weight 500
            line-height 1.1em
            color #666666
          p
            font-size 16px
            line-height 26px
            letter-spacing .01em
            color #767676

        &#sponsors
          img.sponsor
            width 80%
            max-height: 65px
            margin-bottom 3em

        &#support
          a
            text-decoration none
            font-size: 24px
          @media $display-breakpoints.sm-and-down
            a
              font-size: 21px
          img
            max-width 80%


      #footer-hero

        @media $display-breakpoints.md-and-up
          padding: 2em 0;

        &:before
          content ''
          position absolute
          left 0
          right 0
          bottom 0
          height 100vw
          background url('/static/doc-images/slant-footer.svg') no-repeat  50% 100%
          background-size 100%
          @media $display-breakpoints.xs-only
            background-size 475%
            height 300vw
          @media $display-breakpoints.sm-only
            background-size 225%
            height 300vw
          @media $display-breakpoints.md-only
            background-size 140%
            height 300vw


        img
          position relative
        h2
          position: relative
          font-size 32px
          color white
          font-weight 300
          @media $display-breakpoints.lg-and-up
              font-size 40px

      @media $display-breakpoints.sm-and-down
        section
          h2
            font-size 24px
    footer
      a
        text-decoration none
        color #cfd8dc
        &:hover
          color white
          cursor pointer
      background #37424b
      color white
      .flex
        padding 2.5em 3em
        &.vuetify
          background #303c42
          h5
            font-size 21px
          img
            height 32px
            margin-right 10px
            vertical-align middle
          span
            position relative
            top 3px
        h5
          color white
          font-size 16px
        ul
          list-style none
          margin 0
          padding 0
          li
            a
              font-size 16px
              display block
              padding: 0 0 .66em
              .icon.fa
                font-size 18px
                width 25px
      .legal-footer
        background #2c363a
        padding 1em 0
        font-size 14px

</style>


<template lang="pug">
  #home-view
    v-toolbar(fixed :class="[toolbar ? 'toolbar--home' : 'hidden']" ).white.text-xs-center
      img(src="/static/doc-images/header-logo.svg" height="38px")
      v-spacer
      v-btn(flat to="/vuetify/quick-start") Documentation
      v-btn(flat tag="a" href="https://github.com/vuetifyjs/vuetify/releases" target="_blank" rel="noopener").hidden-xs-only Updates


    section#hero
      v-container
        v-layout(row wrap)
          v-flex(xs12 md4).text-xs-center
            img(src="/static/doc-images/logo.svg").logo
          v-flex(xs12 md8).text-xs-center.text-md-left
            h1 Vuetify
            h2 Material Component Framework
            v-container(fluid grid-list-xl).pa-0
              v-layout(row wrap)
                v-flex(xs12 sm3)
                  v-btn(block dark large to="/vuetify/quick-start").blue
                    span Documentation
                v-flex(xs12 sm3)
                  v-btn(
                    large
                    block
                    tag="a"
                    href="https://github.com/vuetifyjs/vuetify"
                    target="_blank"
                    rel="noopener"
                  ).white.primary--text
                    v-icon(left).primary--text fa-github
                    span Github


    div#section-body
      section#features.mb-3
          v-container
            v-card.elevation-2.pt-5.px-5
                v-layout(row wrap)
                  v-flex(xs12 md4).text-xs-center.px-4.mb-5
                    img(src="/static/doc-images/feature1.svg").elevation-1
                    h3.mt-4.mb-3 Vue-CLI Templates
                    p Vuetify comes ready to go with 5 pre-made vue-cli templates. From simple html to full-blown SSR, you are ready to go in minutes.

                  v-flex(xs12 md4).text-xs-center.px-4.mb-5
                    img(src="/static/doc-images/feature2.svg").elevation-1
                    h3.mt-4.mb-3 Custom Layouts
                    p Each and every available layout from the Material design spec is at your disposal. Create unique and flexible user interfaces that fit the scope of any project.

                  v-flex(xs12 md4).text-xs-center.px-4.mb-5
                    img(src="/static/doc-images/feature3.svg")
                    h3.mt-4.mb-3 Semantic Material Components
                    p Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.

      section#sponsors.mb-3
          v-container
            v-card.elevation-2.pa-5
              h2.mb-5.text-xs-center.text-md-left Proudly sponsored by:
              v-layout(row wrap).pb-4
                v-flex(xs12 md3 v-for="(sponsor, i) in sponsors" :key="i").text-xs-center
                    a(:href="sponsor.href" target="_blank" :title="sponsor.title" rel="noopener")
                      img(:src="sponsor.src").sponsor
                v-flex(xs12 md3).text-xs-center
                  v-btn(to="/vuetify/sponsors-and-backers" large).white.primary--text Become a backer
                    v-icon(right).primary--text fa-arrow-circle-right

      section#support.mb-3
          v-container
            v-card.elevation-2.pa-5
              v-layout(row wrap).text-xs-center
                v-flex(xs12).mb-5.mt-3
                  h2 Has Vuetify helped you create an amazing application?<br> <br class="hidden-md-and-up"> You can show your support by making a <strong>donation</strong> in one of two ways:
                v-flex(xs12 sm3 offset-sm3).mb-4
                  a(
                    href="https://www.patreon.com/vuetify"
                    target="_blank" rel="noopener"
                  )
                    div.display-1.mb-2 Patreon
                    img(src="/static/doc-images/patreon.png" width="125px")
                v-flex(xs12 sm3).mb-4
                  a(
                    href="https://paypal.me/vuetify"
                    target="_blank" rel="noopener"
                  )
                    div.display-1.mb-2 PayPal
                    img(src="/static/doc-images/paypal.png" width="125px")

      section#footer-hero.mt-5.mb-0
        v-container
          v-layout(row wrap).mb-5
            v-flex(xs12 md8 lg7).mt-4.mb-5
              img(src="/static/doc-images/logo.svg" width="90px")
              h2.mt-4.mb-5 Supercharge Your Development with the Power of Vue and Material Design
              v-container(fluid grid-list-xl).pa-0
              v-layout(row wrap)
                v-flex(xs12 sm3)
                  v-btn(block dark large to="/vuetify/quick-start").blue
                    span Documentation
                v-flex(xs12 sm3)
                  v-btn(
                    large
                    block
                    tag="a"
                    href="https://github.com/vuetifyjs/vuetify"
                  ).white.primary--text
                    v-icon(left).primary--text fa-github
                    span Github

    footer
      v-layout(row wrap)
        v-flex(xs6 sm3).vuetify
          h5
            img(src="/static/doc-images/logo.svg")
            span Vuetify
          ul
            li
              a( href="https://opensource.org/licenses/MIT")
                span.hidden-sm-only Documentation
                span.hidden-md-and-up.hidden-xs-only Docs
            li
              a( href="https://github.com/vuetifyjs/vuetify" target="_blank") <v-icon dark class="hidden-sm-only">fa-github</v-icon>  GitHub
            li
              a( href="https://twitter.com/vuetifyjs" target="_blank") <v-icon dark class="hidden-sm-only">fa-twitter</v-icon>  Twitter
            li
              a( href="https://www.facebook.com/vuetifyjs" target="_blank") <v-icon dark class="hidden-sm-only">fa-facebook</v-icon>  Facebook

        v-flex(xs6 sm3)
          h5 Donate
          ul
            li
              a( href="https://www.patreon.com/vuetify" target="_blank") Patreon
            li
              a( href="https://www.paypal.me/vuetify" target="_blank") PayPal

        v-flex(xs6 sm3)
          h5 Sponsors
          ul
            li
              a( href="https://www.browserstack.com/" target="_blank") BrowserStack
            li
              a( href="https://www.cloudflare.com/" target="_blank") CloudFlare

        v-flex(xs6 sm3)
          h5 Links
          ul
            li
              a( href="https://opensource.org/licenses/MIT" target="_blank") Vue.js
            li
              a( href="https://opensource.org/licenses/MIT" target="_blank") Material Design



      .legal-footer.text-xs-center
        span &copy; {{ new Date().getFullYear() }} Vuetify LLC. Distributed under the
        a(
          href="https://opensource.org/licenses/MIT"
          target="_blank"
        )  MIT License.

</template>

<script>
  export default {
    data() {
      return {
        sponsors: [
          { title: 'BrowserStack', href: 'https://www.browserstack.com/', src: '/static/doc-images/browser-stack.svg' },
          { title: 'Cloudflare', href: 'https://www.cloudflare.com/', src: '/static/doc-images/cloudflare.svg' }
        ],
        toolbar: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll, { passive: true })
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll, { passive: true })
    },
    methods: {
      onScroll() {
        this.toolbar = window.scrollY > 300
      }
    }
  }
</script>

