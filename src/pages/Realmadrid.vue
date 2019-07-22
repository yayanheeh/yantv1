<template>
 <div class="contact-us full-screen">
  

<div class="video-container"><iframe width="560" height="315" src="https://yantv.netlify.com/play/realmadrid" frameborder="0" allowfullscreen></iframe></div>

<div class="video-container"><iframe width="560" height="315" src="https://yantv.netlify.com/play/komentar" frameborder="0" allowfullscreen></iframe></div>


 <footer class="footer-demo">
      <div class="container">
        <nav class="pull-left">
          <ul>
            <li>
              <router-link :to="{path:'/'}">Home</router-link>
            </li>
            <li>
              <router-link :to="{path:'/register'}">Register</router-link>
            </li>
          </ul>
        </nav>
        <div class="copyright text-center">
          &copy; Coded with
          <i class="fa fa-heart heart"></i> by
          <a href="https://binarcode.com" target="_blank">BinarCode</a>.
          Designed by <a href="https://www.creative-tim.com/?ref=pdf-vuejs" target="_blank">Creative Tim</a>.
        </div>
      </div>
    </footer>
</div>

</template>
<style>
.video-container {
position: relative;
padding-bottom: 56.25%;
padding-top: 30px; height: 0; overflow: hidden;
}
.video-container iframe,
.video-container object,
.video-container embed {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
</style>

<script>
  import Yayan from 'src/components/Yayan/Yayan.vue'

  export default {
    components: {
      Yayan
    }
  }


<style>

</style>
