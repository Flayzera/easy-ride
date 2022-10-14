import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import LocationView from '../views/LocationsViews/LocationView.vue'
import ZoneView from '../views/LocationsViews/ZoneView.vue'
import OfferRideView from '../views/OfferRideView.vue'
import FinishRegistrationView from '../views/FinishRegistrationView.vue'
import RideDetailsView from '../views/RideDetailsView.vue'

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
    path: '/zone/:id',
    name: 'zone',
    component: ZoneView
  },
  {
    path: '/create-ride/:zoneId',
    name: 'createRide',
    component: OfferRideView
  },
  {
    path: '/finish-registration',
    name: 'finishRegistration',
    component: FinishRegistrationView
  },
  {
    path: '/ride/:id',
    name: 'rideDetails',
    component: RideDetailsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
