<template>



 <div class="sticky-top">

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://yantv.netlify.com/play/mnc.html" allowfullscreen></iframe>
</div>

<div class="list-group-item">
 <div class="row">
    <div class="col">
  <i class="nc-icon nc-chart-bar-32"></i>
   Mnc tv live  </div>   
    
    <div class="col">
    
        <router-link :to="{path:'/admin/Dmnc'}">&ensp;&ensp;&ensp; <small><i class="nc-icon nc-button-play"></i> Server 2</small> </router-link></div>
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

