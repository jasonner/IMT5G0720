<template>
    <div class="banner-box">
        <div class="banner">
            <img src="../assets/img/index/banner-bg.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    msg: String
  },
  data(){
    return{
         
    }
  }
}
</script>

<style scoped>
    /* banner图 */
    .banner-box{
        width: 100%;
        height: 622px;
        background:#010d57;
    } 
    .banner-box .banner img{
        width: 1278px;
        height: 622px;
    }
</style>