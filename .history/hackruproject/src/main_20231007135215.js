import { createApp } from 'vue'
import App from './App.vue'

//1. Define route components.
//These can be imported from other files 
const Home = {template: '<div>Home</div>'}
const About= {template: '<div>About</div>'}



createApp(App).mount('#app')
