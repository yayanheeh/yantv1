<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      </side-bar>
<div class="d-none d-md-block">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/dtrans">
        <i class="nc-icon nc-chart-bar-32"></i>
        <p>Trans tv</p>
      </sidebar-link>
      <sidebar-link to="/admin/dtrans7">
        <i class="nc-icon nc-chart-bar-32"></i>
        <p>Trans7</p>
      </sidebar-link>
      <sidebar-link to="/admin/dkompas">
        <i class="nc-icon nc-chart-bar-32"></i>
        <p>Kompas tv</p>
      </sidebar-link>
      <sidebar-link to="/admin/dmetro">
        <i class="nc-icon nc-chart-bar-32"></i>
        <p>Metro tv</p>
      </sidebar-link>
      <sidebar-link to="/admin/dsctv">
        <i class="nc-icon nc-chart-bar-32"></i>
        <p>Sctv</p>
      </sidebar-link>

      <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Tes yayan</p>
        </sidebar-link>
      </template>
    </side-bar>
  </div>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <footer-menu></footer-menu>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  import FooterMenu from './FooterMenu.vue'
  
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      FooterMenu,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
