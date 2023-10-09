import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App.vue';
import Route from './Routes/index.js';
import './main.css';

const app = createApp(App);
const eventBusMit = mitt();

app.config.globalProperties.eventBusMit = eventBusMit;

app.use(Route)
app.mount('#app');
