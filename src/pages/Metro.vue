<template>





 <div class="sticky-top">

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://yantv.netlify.com/play/metro.html" allowfullscreen></iframe>
</div>

<div class="list-group-item">
 <div class="row">
    <div class="col">
  <i class="nc-icon nc-chart-bar-32"></i>
   Metro tv Live  </div>   
    
    <div class="col">
    
        <router-link :to="{path:'/admin/sctv'}"> <i class="nc-icon nc-bell-55"></i> Chanel 2 </router-link></div>
        </div>
        

    </div>
 </div>

</div>

  </template>

<script>
  import Yayan from 'src/components/Yayan/Yayan.vue'

  export default {
    components: {
      Yayan
    }
  }

</script>


<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    }
  }

</script>

              


<style>

</style>

