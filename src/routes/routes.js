import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'

import Realmadrid from 'src/pages/Realmadrid.vue'
import Sctv from 'src/pages/Sctv.vue'
import Trans from 'src/pages/Trans.vue'
import Tvone from 'src/pages/Tvone.vue'
import Trans7 from 'src/pages/Trans7.vue'
import Kompas from 'src/pages/Kompas.vue'
import Rcti from 'src/pages/Rcti.vue'
import Metro from 'src/pages/Metro.vue'
import Net from 'src/pages/Net.vue'



const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'realmadrid',
        name: 'Realmadrid',
        component: Realmadrid
      },
      {
        path: 'sctv',
        name: 'Sctv',
        component: Sctv
      },
{
        path: 'metro',
        name: 'Metro',
        component: Metro
      },

     {
        path: 'trans',
        name: 'Trans',
        component: Trans
      },

     {
        path: 'tvone',
        name: 'Tvone',
        component: Tvone
      },
    {
        path: 'trans7',
        name: 'Trans7',
        component: Trans7
      },
    {
        path: 'kompas',
        name: 'Kompas',
        component: Kompas
      },
     {
        path: 'net',
        name: 'Net',
        component: Net
      },

     {
        path: 'rcti',
        name: 'Rcti',
        component: Rcti
      },

      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
