import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Cats from './components/cats/Cats.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/cats', component: Cats },
    { path: '*', redirect: '/' }
  ]
});