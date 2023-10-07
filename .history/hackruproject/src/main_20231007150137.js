import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//1. Define route components.
//These can be imported from other files 
// const Home = {template: '<div>Home</div>'}
// const About= {template: '<div>About</div>'}

//2. Defining some routes 
//Each route should map to a component 

// const routes = [
//     {path: '/home', component: Home},
//     {path: '/about', component: About}
// ]

//3. Create and mount the root instance
const app = createApp(App).use(router)


createApp({}).use(router).mount('#app')

