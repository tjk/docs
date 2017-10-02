<template lang="pug">
  component(:is="component")
</template>

<script>
  export default {
    data: () => ({
      component: null
    }),
    beforeRouteEnter (to, from, next) {
      console.log(to.params.example)
      return import(
        /* webpackChunkName: "examples" */
        /* webpackMode: "lazy-once" */
        `../examples/${to.params.example}.vue`
      ).then(comp => {
        next(vm => vm.component = comp)
      })
    }
  }
</script>
