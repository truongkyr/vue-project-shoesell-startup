import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './fontawesome/fontawesome-free-6.5.1-web/css/all.min.css'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import './assets/style/tailwind.css';
import router from './router/router.js';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { all } from '@awesome.me/kit-KIT_CODE'
// library.add(fas, fab, far)

createApp(App).use(router).use( VueSplide ).mount('#app');
// app.component('font-awesome-icon', FontAwesomeIcon)
