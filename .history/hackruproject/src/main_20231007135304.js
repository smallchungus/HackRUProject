import { createApp } from 'vue'
import App from './App.vue'

//1. Define route components.
//These can be imported from other files 
const Home = {template: '<div>Home</div>'}
const About= {template: '<div>About</div>'}

//2. Defining some routes 
//Each route should map to a component 

const routes = [
    {path: '/home', component: Home},
    {path: '/about', component: About}
]

//3. Create the router instance and pass the 'routes' option
const router = VueRouter.createRouter


createApp(App).mount('#app')
