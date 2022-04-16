import Vue from 'vue';
import App from './components/App.vue';
import CardsContainer from './components/CardsContainer.vue';
import { makeServer } from './mirage/server';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const routes = [
  {
    path: '/',
    component: CardsContainer,
    children: [{ path: ':id', component: CardsContainer }],
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
