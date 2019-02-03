import Vue from 'vue';
import Router from 'vue-router';
import BurgerCrawler from '@/components/BurgerCrawler';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BurgerCrawler',
      component: BurgerCrawler,
    },
  ],
});
