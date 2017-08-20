<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    name: 'alerts-view',

    data () {
      return {
        doc: {
          component: 'avatars',
          edit: 'AvatarsView',
          title: 'Avatar',
          desc: 'The <code>v-avatar</code> component is used to control the size and border radius of responsive images, typically used to show profile pictures.',
          examples: [
            { header: 'Contextual', file: 'avatars/1', desc: `` }
          ],
          props: {
            'v-avatar': {
              shared: ['contextual', 'transitionable'],
              model: {
                type: '*'
              },
              params: [
                [
                  'dismissible',
                  'Boolean',
                  'False',
                  'Specifies that the Alert can be closed'
                ],
                [
                  'icon',
                  'String',
                  '-',
                  'Designates a specific icon'
                ],
                [
                  'hide-icon',
                  'Boolean',
                  'False',
                  'Hides the alert icon'
                ]
              ]
            }
          },
          slots: {
            'v-alert': {
              shared: ['default']
            }
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  #alert-view
    .alert
      margin: 1rem 0
</style>
