<template lang="pug">
  doc-view#themes-view
    section-header Pre-made Themes
    section-text Below is a list of starter Vuetify template so that you can easily start developing. Each one of them has a demo and source code.
    v-container(fluid grid-list-xl)
      v-layout(row wrap)
        v-flex(
          xs12 sm6
          v-for="template in templates"
          v-bind:key="template.title"
        )
          v-card
            v-card-media(:src='template.screenshot' height='350px')
            v-card-title(primary-title)
              h2.headline.mb-0 {{ template.title }}
            v-card-text {{ template.description }}
            v-card-actions
              v-spacer
              v-btn.blue--text(flat :href="template.sourceUrl") Source Code
              v-btn.blue--text(flat :href="template.demoUrl") Demo

</template>

<script>
  export default {
    data: () => ({
      templates: [
        {
          screenshot: '/static/doc-images/starter/vuetify-premium.jpg',
          title: 'Startup',
          description: 'Showcase your Company or personal portfolio with this beautifully hand-crafted Material design template.',
          sourceUrl: '',
          demoUrl: ''
        },
        { 
          screenshot: '/static/doc-images/starter/vuetify-blog-starter.PNG',
          title: 'Blog',
          description:'A simple template that features a clean interface for creating a blog or blog-like application.',
          sourceUrl: '',
          demoUrl: '' // needs to be hosted
        },
        { 
          screenshot: '/static/doc-images/starter/vuetify-parallax-starter.PNG',
          title: 'Parallax',
          description:'This is a Parallax starter template for vuetify',
          sourceUrl: '',
          demoUrl: '' // needs to be hosted
        },
      ]
    })
  }
</script>