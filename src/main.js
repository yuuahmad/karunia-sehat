// import 'vuetify/styles' // Global CSS has to be imported
// import { createApp } from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'

// loadFonts()

// createApp(App)
//   .use(vuetify)
//   .mount('#app')

// yang benar
import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

loadFonts()

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
}) // Replaces new Vuetify()

app.use(vuetify)
app.use(router)

app.mount('#app')