 
<template>


<div class="sticky-top">

<div class="embed-responsive embed-responsive-16by9">
      <iframe src="https://tv.detik.com/transtv/embed?smartautoplay=true" frameborder="0" allowfullscreen="true" id="video_play" name="video_play"></iframe> </div>
<div class="list-group-item">
 <div class="row">
    <div class="col">
  <i class="nc-icon nc-chart-bar-32"></i>
   Trans tv live  </div>   
    
    <div class="col">
    
        <router-link :to="{path:'/admin/Dtrans'}">&ensp;&ensp;&ensp; <small><i class="nc-icon nc-button-play"></i> Server 2</small> </router-link></div>
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

