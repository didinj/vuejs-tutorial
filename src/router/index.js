import VueRouter from 'vue-router'
import List from '../components/List.vue'
import Details from '../components/Details.vue'
import Maps from '../components/Maps.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'List',
            component: List
        },
        {
            path: '/details/:id',
            name: 'Details',
            component: Details
        },
        {
            path: '/maps/:lat/:lng',
            name: 'Maps',
            component: Maps
        }
    ]
})