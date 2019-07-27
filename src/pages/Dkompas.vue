<template>

<div class="embed-responsive embed-responsive-16by9">
  <iframe frameborder="0" width="480" height="270" src="https://www.dailymotion.com/embed/video/x6pz4sa?autoPlay=1" allowfullscreen="" allow="autoplay"></iframe></div>

<div class="list-group-item">
 <div class="row">
    <div class="col">
  <i class="nc-icon nc-chart-bar-32"></i>
   Metro tv Live  </div>   
    
    <div class="col">
    
        <router-link :to="{path:'/admin/sctv'}">&ensp;&ensp; <i class="nc-icon nc-button-play"></i> Chanel 2 </router-link></div>
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

