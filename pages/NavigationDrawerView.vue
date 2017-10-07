<template lang="pug">
  component-view(v-bind:doc="doc")
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
              header: 'Default',
              file: 'navigation-drawers/permanent',
              desc: 'The navigation drawer is primarily used to house links to the pages in your application'
            },
            {
              header: 'Colored drawer',
              file: 'navigation-drawers/permanent-clipped',
              desc: 'Navigation drawers can be cutomized to fit any application\'s design. While any component can be used within a drawer, the primary ones you will use are <code>v-list</code>, all of the <strong>list</strong> children components and <code>v-divider</code>'
            },
            {
              header: 'Permanent floating drawer',
              file: 'navigation-drawers/permanent-floating',
              desc: 'A navigation drawer can be placed inside of a card and float over the content background.'
            },
            // {
            //   header: 'Floating drawer in a card',
            //   file: 'navigation-drawers/permanent-floating-card',
            //   desc: 'A card can be used to contain a navigation drawer\'s items.'
            // },
            {
              header: 'Avatars',
              file: 'navigation-drawers/persistent',
              desc: 'Since drawers support the <code>v-list</code> component, you can easily create customized dashboard solutions.'
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
                  'mini-variant-width',
                  '[Number, String]',
                  '80',
                  'Designates the width assigned when the <code>mini</code> prop is turned on'
                ],
                [
                  'mobile-break-point',
                  'Number',
                  '1264',
                  'Designates the window width for the drawer to become mobile'
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
                ],
                [
                  'width',
                  '[Number, String]',
                  '300',
                  'The width of the drawer.'
                ]
              ]
            }
          },
          slots: {
            'v-navigation-drawer': {
              shared: ['default']
            }
          }
        }
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
    
    .overlay
      z-index: 0
      
    #example-8
      .icon
        color: #fff !important
</style>
