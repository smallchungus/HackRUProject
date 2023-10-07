import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueRouter, createRouter, createWebHistory } from 'vue-router'

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

//3. Create and mount the root instance
const app = createApp(App).use(router)

//4. Create the router instance and pass the 'routes' option
const main_router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes //short for 'routes: routes'
})

createApp()app.use(main_router)
app.mount('#app')