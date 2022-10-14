import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import LocationView from '../views/LocationsViews/LocationView.vue'
import LesteView from '../views/LocationsViews/LesteView.vue'
import OfferRideView from '../views/OfferRideView.vue'
import FinishRegistrationView from '../views/FinishRegistrationView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/location',
    name: 'location',
    component: LocationView
  },
  {
    path: '/leste',
    name: 'leste',
    component: LesteView
  },
  {
    path: '/offer-ride',
    name: 'offerRide',
    component: OfferRideView
  },
  {
    path: '/finish-registration',
    name: 'finishRegistration',
    component: FinishRegistrationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
