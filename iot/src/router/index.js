import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import UserInfo from "../views/UserInfo"
import HomePage from '../views/HomePage'
import RealTimePointInfoPage from '../views/RealTimePointInfoPage'
import MonPointPage from '../views/MonPointPage'
import DataStatisticsPage from "../views/DataStatisticsPage"
import HistoricalDataPage from "../views/HistoricalDataPage"
import WarnInfoEditPage from "../views/WarnInfoEditPage"
import SemanticSearchPage from "../views/SemanticSearchPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/RealTimePointInfoPage',
      name: 'RealTimePointInfoPage',
      component: RealTimePointInfoPage
    },
    {
      path: '/MonPointPage',
      name: 'MonPointPage',
      component: MonPointPage
    },
    {
      path: '/DataStatisticsPage',
      name: 'DataStatisticsPage',
      component: DataStatisticsPage
    },
    {
      path: '/HistoricalDataPage',
      name: 'HistoricalDataPage',
      component: HistoricalDataPage
    },
    {
      path: '/WarnInfoEditPage',
      name: 'WarnInfoEditPage',
      component: WarnInfoEditPage
    },
    {
      path: '/SemanticSearchPage',
      name: 'SemanticSearchPage',
      component: SemanticSearchPage
    },
  ]
})
