 
<template>



<div class="sticky-top">

<div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EL2ggA7Z-Y4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
<div class="list-group-item">
 <div class="row">
    <div class="col">
  <i class="nc-icon nc-chart-bar-32"></i>
   Tvone Live  </div>   
    
    <div class="col">
    
        <router-link :to="{path:'/admin/Dtvone'}">&ensp;&ensp;&ensp; <small><i class="nc-icon nc-button-play"></i> Server 2</small> </router-link></div>
        </div>
        

    </div>
 </div>
</div>
</template>
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

