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
import Antv from 'src/pages/Antv.vue'
import Mnc from 'src/pages/Mnc.vue'
import Indosiar from 'src/pages/Indosiar.vue'
import Gtv from 'src/pages/Gtv.vue'
import Dsctv from 'src/pages/Dsctv.vue'
import Dtrans from 'src/pages/Dtrans.vue'
import Dtvone from 'src/pages/Dtvone.vue'
import Dtrans7 from 'src/pages/Dtrans7.vue'
import Dkompas from 'src/pages/Dkompas.vue'
import Drcti from 'src/pages/Drcti.vue'
import Dmetro from 'src/pages/Dmetro.vue'
import Dnet from 'src/pages/Dnet.vue'
import Dantv from 'src/pages/Dantv.vue'
import Dmnc from 'src/pages/Dmnc.vue'
import Dindosiar from 'src/pages/Dindosiar.vue'
import Dgtv from 'src/pages/Dgtv.vue'
import Euro from 'src/pages/Euro.vue'
import Tentangkami from 'src/pages/Tentangkami.vue'
import Kritik from 'src/pages/Kritik.vue'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/kompas'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/kompas',
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
        path: 'antv',
        name: 'Antv',
        component: Antv
      },
    {
        path: 'mnc',
        name: 'Mnc',
        component: Mnc
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
        path: 'indosiar',
        name: 'Indosiar',
        component: Indosiar
      },
   {
        path: 'gtv',
        name: 'Gtv',
        component: Gtv
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
        path: 'euro',
        name: 'Euro',
        component: Euro
      },


    {
        path: 'dsctv',
        name: 'Dsctv',
        component: Dsctv
      },
   {
        path: 'dtrans',
        name: 'Dtrans',
        component: Dtrans
      },

   {
        path: 'dtvone',
        name: 'Dtvone',
        component: Dtvone
      },

   {
        path: 'dtrans7',
        name: 'Dtrans7',
        component: Dtrans7
      },

  {
        path: 'dkompas',
        name: 'Dkompas',
        component: Dkompas
      },

   {
        path: 'drcti',
        name: 'Drcti',
        component: Drcti
      },

   {
        path: 'dmetro',
        name: 'Dmetro',
        component: Dmetro
      },
{
        path: 'dnet',
        name: 'Dnet',
        component: Dnet
      },

{
        path: 'dantv',
        name: 'Dantv',
        component: Dantv
      },
{
        path: 'dmnc',
        name: 'Dmnc',
        component: Dmnc
      },

{
        path: 'dindosiar',
        name: 'Dindosiar',
        component: Dindosiar
      },
{
        path: 'dgtv',
        name: 'Dgtv',
        component: Dgtv
      },

{
        path: 'tentangkami',
        name: 'Tentangkami',
        component: Tentangkami
      },

{
        path: 'kritik',
        name: 'Kritik',
        component: Kritik
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
