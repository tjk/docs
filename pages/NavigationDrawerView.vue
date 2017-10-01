<template lang="pug">
  component-view(v-bind:doc="doc")
    section#layouts
      v-container(fluid grid-list-xl).pa-0
        v-layout(row wrap)
          v-flex(
            xs12 sm6 md4 lg3
            v-for="layout in layouts"
            :key="layout.name"
          )
            v-card(
              hover
              :href="layout.href"
              target="_blank"
              rel="noopener"
            )
              v-card-media(height="300px").grey.lighten-2
                v-layout(align-center)
                  v-flex.text-xs-center
                    div.title {{ layout.name }}
</template>

<script>

  export default {
    data () {
      return {
        doc: {
          title: 'Navigation drawer',
          edit: 'NavigationDrawer',
          component: 'VNavigationDrawer',
          desc: 'The <code>v-navigation-drawer</code> component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without <strong>vue-router</strong> right out the box.',
          examples: [
            {
              header: 'Permanent drawer',
              file: 'navigation-drawers/permanent',
              desc: 'Permanent navigation drawers are default open. These are used for applications that are desktop only and are not openable or closeable.'
            },
            {
              header: 'Permanent clipped drawer',
              file: 'navigation-drawers/permanent-clipped',
              desc: 'A clipped drawer rests under the application toolbar.'
            },
            {
              header: 'Permanent floating drawer',
              file: 'navigation-drawers/permanent-floating',
              desc: 'A floating drawer has no visible container (no border-right).'
            },
            {
              header: 'Permanent floating drawer in a card',
              file: 'navigation-drawers/permanent-floating-card',
              desc: 'A card can be used to contain a navigation drawer\'s items.'
            },
            {
              header: 'Persistent',
              file: 'navigation-drawers/persistent',
              desc: 'A persistent drawer can be opened or closed. This is recommended sidebar for an application that supports both desktop and mobile.'
            },
            {
              header: 'Mini',
              file: 'navigation-drawers/mini',
              desc: 'The navigation drawer also has a mini-variant which can be controlled using the prop <code>mini-variant.sync</code>.'
            },
            {
              header: 'Temporary',
              file: 'navigation-drawers/temporary',
              desc: 'A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. This drawer behavior is mimicked on the persistent drawer when on mobile. Clicking outside of the drawer will cause it to close.'
            },
            {
              header: 'Dark theme',
              file: 'navigation-drawers/dark',
              desc: 'Vuetify also supports the dark application theme. This will not override components that have default themes so in some cases it will be necessary to manually set the dark theme accents.'
            }
          ],
          props: {
            'v-navigation-drawer': {
              shared: ['app', 'theme', 'overlay'],
              model: {
                type: ['Boolean'],
                default: 'True'
              },
              params: [
                [
                  'absolute',
                  'Boolean',
                  'False',
                  'Sets the sidebar position to absolute',
                ],
                [
                  'clipped',
                  'Boolean',
                  'False',
                  'A clipped drawer rests under the application toolbar',
                ],
                [
                  'disable-route-watcher',
                  'Boolean',
                  'False',
                  'Disables opening of Sidebar when route changes'
                ],
                [
                  'enable-resize-watcher',
                  'Boolean',
                  'False',
                  'Will automatically open/close drawer when resized depending if mobile or desktop.'
                ],
                [
                  'height',
                  'String',
                  '100%',
                  'Sets height of the sidebar',
                ],
                [
                  'floating',
                  'Boolean',
                  'False',
                  'A floating drawer has no visible container (no border-right)'
                ],
                [
                  'mini-variant',
                  'Boolean',
                  'False',
                  'Condenses sidebar width, also accepts the <strong>.sync</strong> modifier. With this, the drawer will re-open when clicking it',
                ],
                [
                  'permanent',
                  'Boolean',
                  'False',
                  'The drawer remains visible regardless of screen size'
                ],
                [
                  'persistent',
                  'Boolean',
                  'False',
                  'A persistent drawer can be opened or closed'
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Places the sidebar on the right'
                ],
                [
                  'temporary',
                  'Boolean',
                  'False',
                  'A temporary drawer sits above its application and uses a scrim (overlay) to darken the background',
                ],
                [
                  'touchless',
                  'Boolean',
                  'False',
                  'Disable mobile touch functionality'
                ]
              ]
            }
          },
          slots: {
            'v-navigation-drawer': {
              shared: ['default']
            }
          }
        },
        layouts: [
          { name: 'Baseline', href: '/examples/layouts/baseline.html' },
          { name: 'Baseline Flipped', href: '/examples/layouts/baseline-flipped.html' },
          { name: 'Complex', href: '/examples/layouts/complex.html' },
          { name: 'Dark Theme', href: '/examples/layouts/dark.html' },
          { name: 'Google Contacts', href: '/examples/layouts/google-contacts.html' },
          { name: 'Google Keep', href: '/examples/layouts/google-keep.html' },
          { name: 'Google Youtube', href: '/examples/layouts/google-youtube.html' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/settings/_elevations.styl'

  #navigation-drawer-view
    .component-example .card__text
      overflow: hidden

    .navigation-drawer
      elevation(4)
      position: relative
      z-index: 0
      
    #example-8
      .icon
        color: #fff !important
</style>
