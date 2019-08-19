import Vue from 'vue'
import Router from 'vue-router'
import BodyMassIndex from './views/Body-mass-index'
import HeartRate from './views/Heart-rate'
import IdealWeight from './views/Ideal-weight'
import NutritionalNeeds from './views/Nutritional-needs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'nutritional-needs' }
    },
    {
      path: '/nutritional-needs',
      name: 'nutritional-needs',
      component: NutritionalNeeds
    },
    {
      path: '/body-mass-index',
      name: 'body-mass-index',
      component: BodyMassIndex
    },
    {
      path: '/ideal-weight',
      name: 'ideal-weight',
      component: IdealWeight
    },
    {
      path: '/heart-rate',
      name: 'heart-rate',
      component: HeartRate
    },
    {
      path: '/*',
      redirect: { name: 'nutritional-needs' }
    }
  ],
  mode: 'abstract',
  linkActiveClass: 'active'
})
