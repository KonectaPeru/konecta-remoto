import Vue from 'vue'
import VueRouter from 'vue-router'
import signin from '../views/signin.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      redirect: 'signin'
    },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/inicio',
    name: 'Inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue'),
    meta: {
      requiresAuth: true
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('home')
//   else if (!requiresAuth && currentUser) next('inicio')
//   else next()
// })

// router.beforeEach(async (to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth && !currentUser){
//     next('signin');
//   }else{
//     next();
//   }
// });

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){

    next('signin');
  }else{
    next();
  }
});


export default router
