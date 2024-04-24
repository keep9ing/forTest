import Vue from "vue";
import VueRouter from "vue-router";
// import AskView from "../views/AskView.vue";
// import NewsView from "../views/NewsView.vue";
// import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'news',
    },    {
      // path : url 주소
      path: '/news',
      name: 'news',
      // component : url 주소로 갔을 때 표시할 컴포넌트
      // component: NewsView,
      component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: createListView('AskView'),

    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: createListView('JobsView'),

    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
})