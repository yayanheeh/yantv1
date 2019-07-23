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
      <router-link :to="{path:'/admin'}">  opacity: 1;
}
<ul class="thumb">
  <li>
    <div class="overlay">
      <a href="#"><img class="thumbnail" src="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" width="192" height="109" alt=""></a>
      <span class="time">3:28</span>
      <a href="#" class="playWrapper">
        <!--<span class="playBtn"><img src="http://wptf.com/wp-content/uploads/2014/05/play-button.png" width="50" height="50" alt=""></span>-->
      </a>
    </div>
    <div class="thumbCaption"><a href="">This is the description of the video...</a></div>
  </li>
  <li>
    <div class="overlay">
      <a href="#"><img class="thumbnail" src="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" width="192" height="109" alt=""></a>
      <span class="time">12:10</span>
      <a href="#" class="playWrapper">
        <span class="playBtn"><img src="http://wptf.com/wp-content/uploads/2014/05/play-button.png" width="50" height="50" alt=""></span>
      </a>
    </div>
    <div class="thumbCaption"><a href="">description goes here...</a></div>
  </li>
</ul></router-link> 
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
.thumb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.thumb li {
  width: 193px;
}

.thumb li ~ li {
  margin-left: 20px;
}

.thumb .thumbCaption {
  padding: 10px 0;
}

.overlay {
  position: relative;
}

.overlay .thumbnail {
  display: block;
}

.overlay .time {
  position: absolute; z-index: 2;
  right: 3px; bottom: 3px;
  padding: 2px 5px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}

.overlay .playWrapper {
  opacity: 0;
  position: absolute; z-index: 1;
  top: 0;
  width: 192px; height: 109px;
  background: rgba(0,0,0,0.6) url("http://wptf.com/wp-content/uploads/2014/05/play-button.png") no-repeat scroll center center / 50px 50px;
}

.playWrapper .playBtn {
  position: absolute; z-index: 2;
  width: 50px; height: 50px;
  left: 0; right: 0; top: 0; bottom: 0; margin: auto; /* center */
}

.thumb .overlay:hover .playWrapper {
  opacity: 1;
}
</style>

<script>
  export default {}
</script>
<style>
</style>
