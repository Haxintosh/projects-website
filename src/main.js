import { createApp } from 'vue';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';


import App from '/src/components/App.vue';

const app = createApp(App);
app.use(Buefy, {defaultIconPack: 'fas'});

app.mount('#app');

