<template>





 <div class="sticky-top">
<div class="p-3 mb-2 bg-dark text-white">

<div class="embed-responsive embed-responsive-16by9">
  <iframe src="https://www.metube.id/embed/206?type=live&autoplay=true&mute=true" width="560" height="315" frameborder="0" allowfullscreen></div>
</div>
</div>
<div class="d-block d-md-none">
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






