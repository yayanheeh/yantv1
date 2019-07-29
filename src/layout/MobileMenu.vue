<template>
  <ul class="nav nav-mobile-menu">
    <li class="nav-item">
     <router-link :to="{path:'/admin/tentangkami'}">
    Tentang kami</router-link>

</li>

 <li class="nav-item">
      <router-link :to="{path:'/admin/kritik'}">
Kritik/saran</router-link>
    </li>
 <li class="nav-item">
      <router-link :to="{path:'/admin'}">
Versi 1.0.1
    </li>

  </ul>
</template>
<script>
  export default {
    name: 'mobile-menu'
  }
</script>
<style>
</style>
