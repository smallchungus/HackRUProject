import { createApp } from 'vue'
import App from './App.vue'

/1. Define route components.
//
const Home = {template: '<div>Home</div>'}
const About= {template: '<div>About</div>'}



createApp(App).mount('#app')
