<template>
<div class="container">
      <div class="row">
    <div class="col">
     <router-link :to="{path:'/admin'}"><div class="video-thumbnail"> <img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</div></router-link>
    </div>
    <div class="col">
      <router-link :to="{path:'/admin'}"><div class="video-thumbnail"> <img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</div></router-link> 
    </div></div>
<div class="row">
    <div class="col">
      <router-link :to="{path:'/admin'}"><img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</router-link> 
    </div>
    <div class="col">
      <router-link :to="{path:'/admin'}"><img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</router-link>  
    </div>
</div>
<div class="row">
    <div class="col">
      <router-link :to="{path:'/admin'}"><img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</router-link> 
    </div>
    <div class="col">
      <router-link :to="{path:'/admin'}"><img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</router-link> 
    </div>
</div>
<div class="row">
    <div class="col">
      <router-link :to="{path:'/admin'}"><img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</router-link> 
    </div>
    <div class="col">
      <router-link :to="{path:'/admin'}"><img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</router-link> 
    </div> </div>

<div class="row">
    <div class="col">
      <router-link :to="{path:'/admin'}"><img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</router-link> 
    </div>
    <div class="col">
      <router-link :to="{path:'/admin'}"><img src="https://yayanheeh.github.io/live/logo/rcti.jpg" class="img-thumbnail" alt="Responsive image">
</router-link>  
    </div>
</div></div>

</template>
<style>
 .video-thumbnail {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 30px;

  &:before {
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    content: "\f01d";
    font-family: FontAwesome;
    font-size: 100px;
    color: #fff;
    opacity: .8;
    text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  }
  &:hover:before {
    color: #eee;
  }
}
</style>

<script>
  export default {}
</script>
<style>
</style>
