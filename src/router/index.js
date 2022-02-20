import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior() {
		return {x: 0, y: 0}
	},
	routes: [
		{
			path: '/',
			redirect: {name: 'dashboard'}},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import('@/views/dashboard.vue'),
		},
		{
			path: '/user',
			name: 'user',
			component: () => import('@/views/user.vue'),
		},
	],
})

router.afterEach(() => {
	const appLoading = document.getElementById('loading-bg')
	if (appLoading) {
		appLoading.style.display = 'none'
	}
})

export default router
