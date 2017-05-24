webpackJsonp([47],{1140:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-view",[o("v-layout",{attrs:{"column-xs":"column-xs","row-sm":"row-sm"}},[o("v-flex",{attrs:{xs12:"xs12",sm8:"sm8",md12:"md12"}},[o("section-def",[o("dt",{slot:"title"},[e._v("Theme")]),o("dd",{slot:"desc"},[e._v("Vuetify offers the ability to easily change the colors of your application.")])])],1),o("ad")],1),o("section",[o("section-header",[e._v("Light and Dark")]),o("section-text",[e._v("The default configuration is set to a light theme, but you're free to swap to a darker one by doing the following.")]),o("section-text",[e._v("After setting your app theme with "),o("code",[e._v("<v-app dark></v-app>")]),e._v(" theme, reset the material theme stylus variable:")]),o("markup",{attrs:{lang:"stylus"}},[e._v("$material-theme := $material-dark")])],1),o("section",[o("section-header",[e._v("Customizing")]),o("section-text",[e._v("The default theme hash looks like the example below:")]),o("markup",{attrs:{lang:"stylus"}},[e._v("$theme := {\n  primary: $blue.darken-2\n  accent: $blue.accent-2\n  secondary: $grey.darken-3\n  info: $blue.base\n  warning: $amber.base\n  error: $red.base\n  success: $green.base\n}")]),o("section-text",[e._v("In order to change these variables, we have to create our array before the import of the Vuetify styles. You will need to setup your build process to accommodate a stylus file. If you are using one of the pre-made templates available on the "),o("router-link",{attrs:{to:"/vuetify/quick-start"}},[e._v("Quick Start")]),e._v(" guide, you can skip this next section.")],1),o("h6",[e._v("Setup stylus-loader with Webpack")]),o("section-text",[e._v("In the command line, run:")]),o("markup",{attrs:{lang:"cli"}},[e._v("npm i stylus stylus-loader style-loader css-loader --save-dev")]),o("section-text",[e._v("This will install the dependecies needed to import stylus files. Once installed, open your webpack config and add an additional rule:")]),o("markup",{attrs:{lang:"javascript"}},[e._v("{\n  test: /\\.styl$/,\n  loader: ['style', 'css', 'stylus']\n}")]),o("section-text",[e._v("This will tell webpack how to handle a .styl file when imported. Next, we need to create the main entry point. Create a folder called "),o("code",[e._v("stylus")]),e._v(" in your src directory with a file named "),o("code",[e._v("main.styl")]),e._v(". Once done, open the .styl file and add this entry.")]),o("markup",{attrs:{lang:"stylus"}},[e._v("// main.styl\n@import '../../node_modules/vuetify/src/stylus/main'")]),o("section-text",[e._v("Keep in mind that the relative location of node_modules may differ in your project so adjust accordingly. You have 2 options for import location, either your main "),o("code",[e._v("App.vue")]),e._v(" or "),o("code",[e._v("app.js")]),e._v(".")]),o("markup",{attrs:{lang:"javascript"}},[e._v("// app.js\nrequire('./stylus/main.styl')")]),o("markup",{attrs:{lang:"html"}},[e._v("// App.vue\n<style lang=\"stylus\">\n  @import './stylus/main'\n</style>")]),o("section-text",[e._v("After you have decided on your import location, if you are requiring the Vuetify stylesheet by a <link> tag in your index file, remove it. Restart your build processes and re-open your project. You should see all of the styles working correctly.")]),o("h6",[e._v("Modify your theme")]),o("section-text",[e._v("Now that stylus is configured, we can create a custom "),o("code",[e._v("$theme")]),e._v(" hash containing the application specific styles. Keep in mind, if you want to use the built in color pack variables, i.e. "),o("code",[e._v("$grey.lighten-3")]),e._v(" you will need to import the color file at the top of your "),o("code",[e._v("main.styl")]),e._v(" file. For a list of colors available, navigate to the "),o("router-link",{attrs:{to:"/style/colors"}},[e._v("Colors")]),e._v(" section of the documentation.")],1),o("markup",{attrs:{lang:"stylus"}},[e._v("@import '../../node_modules/vuetify/src/stylus/settings/_colors'\n \n@import '../../node_modules/vuetify/src/stylus/main'")]),o("section-text",[e._v("After you have decided on your color pallete, simply create a new hash:")]),o("markup",{attrs:{lang:"stylus"}},[e._v("@import '../../node_modules/vuetify/src/stylus/settings/_colors'\n \n$theme := {\n  primary: $red.darken-2\n  accent: $red.accent-2\n  secondary: $grey.lighten-1\n  info: $blue.lighten-1\n  warning: $amber.darken-2\n  error: $red.accent-4\n  success: $green.lighten-2\n}\n \n@import '../../node_modules/vuetify/src/stylus/main'")])],1)],1)},staticRenderFns:[]}},700:function(e,t,o){var s=o(9)(o(862),o(1140),null,null,null);e.exports=s.exports},862:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){this.$emit("view",this.meta())},preFetch:function(){return this.methods.meta()},methods:{meta:function(){return{h1:"Theme",title:"Theme | Vuetify",description:"",keywords:"vuetify themes"}}}}}});