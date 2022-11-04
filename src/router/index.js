import Vue from 'vue'
import VueRouter from 'vue-router'
import ListTest from '../views/ListTest.vue'
import MenuTest from '../views/MenuTest.vue'
import MainTest from '../views/MainTest.vue'
import SideSubMenuTest from '@/views/SideSubMenuTest.vue'
import Channel from '@/views/Channel.vue'
import DirectMsg from '@/views/DirectMsg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list-test',
    name: 'listTest',
    component: ListTest,
  },
  {
    path: '/menu-test',
    name: 'menuTest',
    component: MenuTest,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/side-test',
    name: 'menuTest',
    component: MenuTest,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/main-view',
    name: 'mainView',
    component: MainTest,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/side-sub-menu-test',
    name: 'sideSubMenuTest',
    component: SideSubMenuTest,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/channel/:channelId',
    name: 'channel',
    component: Channel,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/directMsg/:directMsgId',
    name: 'directMsg',
    component: DirectMsg,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => {
		if (err.name !== 'NavigationDuplicated') throw err;
	});
};

export default router
