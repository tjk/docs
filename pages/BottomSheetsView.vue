<template lang="pug">
  component-view(:doc="doc")
</template>

<script>
  export default {
    data: () => ({
      doc: {
        component: 'avatars',
        edit: 'BottomSheetssView',
        title: 'Bottom sheets',
        desc: 'Soon',
        examples: [
          { header: 'Standard display', file: 'bottom-sheets/1', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
          { header: 'Inset bottom sheets', file: 'bottom-sheets/2', desc: `In this example we display an inset bottom sheet which extends a default maximum of 70%. This can be re-defined through the <strong>max-width</strong> prop. We also showcase dynamic class binding using the Vuetify breakpoint object.` }
        ],
        props: {
          'v-bottom-sheets': {
            params: [
            ]
          }
        },
        slots: {
          'v-bottom-sheets': {
            shared: ['default']
          }
        }
      }
    })
  }
</script>