<template lang="pug">
  component-view(v-bind:doc="doc" id="badges-view")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Badge directive',
          edit: 'Badges',
          directive: 'badge',
          desc: `
            <p>
              Badge directives can be applied to any element using the <code>v-badge</code> directive. By default, a badge will use the application's defined <strong class="primary--text">primary color</strong>. Parameters can be passed using the arg, <code>v-badge:arg</code>, modifier, <code>v-badge:2.modifier</code>, or by passing an object by expression, <code>v-badge="{ value: 2, overlap: true }"</code>
            </p>
            <p>
              The color can be changed by using the color--after helper class, or by apply a class that modifies the background of the badged elements <strong>:after</strong> pseudo-selector.
            </p>`,
          examples: [
            { header: 'Character', file: 'badges/character', desc: 'Any character can be placed with a badge.' },
            { header: 'Icon', file: 'badges/icon', desc: 'The icon badge type only supports Material Design icons.' },
            { header: 'Inline', file: 'badges/inline', desc: 'Badges can also be placed inline with text.' },
            { header: 'Visibility', file: 'badges/visibility', desc: 'The visibility of badges can be controlled either by setting the object property <code>visible</code> to <code>false</code>, or setting the entire object to either <code>false</code> or <code>null</code>.' }
          ],
          props: {
            'v-badge': {
              model: {
                type: '*'
              },
              params: [
                [
                  'color',
                  'String',
                  'False',
                  'Designate a custom badge color from the MD color spec'
                ],
                [
                  'left',
                  'Boolean',
                  'False',
                  'Position the badge to the left'
                ],
                [
                  'bottom',
                  'Boolean',
                  'False',
                  'Position the badge to the bottom'
                ],
                [
                  'transition',
                  'String',
                  'fab-transition',
                  'Transition used when enabling or disabling the bdage'
                ],
                [
                  'overlap',
                  'Boolean',
                  'False',
                  'Remove the added margin and allow badge to overlap designated element'
                ]
              ]
            }
          }
        }
      }
    }
  }
</script>
