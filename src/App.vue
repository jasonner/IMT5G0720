<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){
    }
  }
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
  width: 100%;
  background: url(./assets/img/index/bgbox.png) center  no-repeat;
  background-size: 100% 100%;
}
*{
  margin: 0;
  padding: 0;
}
body,h1,h2,h3,h4,h5,h6,div,dd,dt,dl,form,kbd,table,ul,li,marquee,hr,blockquote,ol,pre,fieldset,legend,button,input,textarea,th,td{font-size:12px; margin:0; padding:0; font-family: "微软雅黑",Arial, "宋体", Tahoma, Verdana,  Helvetica, sans-serif;}
address,cite,dfn,em,var{font-style:normal;}
button,input,select,textarea{font-size:100%; cursor:pointer}
input{ cursor:pointer}
table{border-collapse:collapse;border-spacing:0;}
small{font-size:12px;}
ul,ol{list-style:none;}
img{border:0;}
ul{list-style:none;}
.clear{ clear:both;}
a{text-decoration: none; color: #666666; }
a:hover{ color:#000; text-decoration:none}
input[type="submit"],input[type="reset"],input[type="button"],input[type="text"], button { -webkit-appearance: none;border-radius: 0; } 

.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */  
}
.TitleH4{
  position: relative;
  height: 45px;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 45px;
  margin-top: 48px;
}
.TitleH4 span{
    position: absolute;
    left: 568px;
    top: 40px;
    width: 70px;
    height: 3px;
    background: #5588f2;
    border-radius: 50px;
}

</style>
