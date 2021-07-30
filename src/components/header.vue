<template>
    <div class="content">
      <div class="header-list">
          <div class="list1"><img src="@/assets/img/index/logo.png" alt="" srcset=""></div>
          <div class="list2">
            <input type="text" name=""  placeholder="请输入关键字" id=""/>
            <el-button slot="append" icon="el-icon-search">站内搜索</el-button>
          </div>
      </div>

      <div class="menu-list">
        <div class="list">
            <p v-bind:class="{ active: isActive=='1'}">
              <router-link :to="{path:'/index',query: {name: 1}}">首页</router-link>
            </p>
            <p v-bind:class="{ active: isActive=='2' }">
              <router-link :to="{path:'/conferenceDetail',query: {name: 2}}">大会概况</router-link>
              <ul class="ul-list" v-if="isActive=='2'">
                <li><a href="#ConferenceIntroduction">大会介绍</a></li>
                <li><a href="#Organization">组织机构</a></li>
                <li><a href="#Time">大会时间</a></li>
                <li><a href="#ExhibitionScope">展示范围</a></li>
                <li><a href="#History">大会历史</a></li>
              </ul>
            </p>
            <p v-bind:class="{ active: isActive=='3' }">
              <router-link :to="{path:'/newsCenter',query: {name: 3}}">新闻中心</router-link>
              <ul class="ul-list" v-if="isActive=='3'">
                <li><a href="#assembly">大会新闻</a></li>
                <li><a href="#assembly">行业新闻</a></li>
              </ul>
            </p>
            <p v-bind:class="{ active: isActive=='4' }">
              <router-link :to="{path:'/tradeFair',query: {name: 4}}">展商中心</router-link>
              <ul class="ul-list" v-if="isActive=='4'">
                <li><a href="#exhibition">为何参展</a></li>
                <li><a href="#standard">标准展位</a></li>
                <li><a href="#expenses">参展费用</a></li>
                <li><a href="#download">下载中心</a></li>
              </ul>  
            </p>
            <p v-bind:class="{ active: isActive=='5' }"><router-link :to="{path:'/dayActivities',query: {name: 5}}">同期活动</router-link></p>
            <p v-bind:class="{ active: isActive=='6' }">
              <router-link :to="{path:'/audienceCenter',query: {name: 6}}">观众中心</router-link>
              <ul class="ul-list" v-if="isActive=='6'">
                <li><a href="#participate">为何参展</a></li>
                <li><a href="#scene">展会现场</a></li>
                <li><a href="#publicity">宣传方案</a></li>
                <li><a href="#notice">参会须知</a></li>
                <li><a href="#promotion">展商推介</a></li>
              </ul>  
            </p>
            <p>往届回顾</p>
            <p v-bind:class="{ active: isActive=='8' }">
              <router-link :to="{path:'/registration',query: {name: 8}}">注册登记</router-link>
              <ul class="ul-list" v-if="isActive=='8'">
                <li><a href="#audience">观众报名</a></li>
                <li><a href="#audience">展商报名</a></li>
              </ul>  
            </p>
            <p v-bind:class="{ active: isActive=='9' }"><router-link :to="{path:'/contactUs',query: {name: 9}}">联系我们</router-link></p>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data(){
    return{
        isActive:'1'
    }
  },
  mounted(){
    var query=this.$route.query;
    let name = query.name;
    sessionStorage.setItem('name',name);
    this.isActive = name || '1';
  },
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.content{
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #dedede;
  z-index: 1000;
} 
.header-list{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 108px;
}
.header-list div{
  flex: 1;
}
.header-list .list1{
  text-align: left;
}
.header-list .list1 img{
  width: 347px;
  height: 68px;
  margin-top: 23px;
}

.header-list .list2 {
  text-align: right;
  padding-top: 35px;
  box-sizing: border-box;
}
.header-list .list2 input{
  width: 164px;
  height: 38px;
  border: 1px solid #dedede;
  padding-left: 7px;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: none;
  border-bottom-right-radius: none;
  font-size: 14px;
  outline-color:#1e7be2;
}
.header-list .list2 input:active{
  border: none;
}
.header-list .list2 button{
  width: 90px;
  height: 40px;
  text-align: left;
  float: right;
  background: #5588f2;
  color: #fff;
  font-size: 12px;
  padding: 0;
  padding-left: 6px;
  box-sizing: border-box;
  margin-top: -1px;
}
@media (width: 1280px) {
  .header-list .list2 button{
    width: 120px;
  }
  .header-list .list2 input{
    width: 180px;
  }

} 


.menu-list{
    width: 100%;
    height: 80px;
    background: #fff;

}
.menu-list .list{
    display: flex;
    width: 1200px;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
    border-top: 1px solid #dedede;
}
.menu-list p{
    flex: 1;
    font-size: 18px;
    text-align: left;
    cursor: pointer;
    position: relative;
}
.menu-list .active a{
    color: #5387f2;
}
.menu-list .active:hover .ul-list{
  visibility:visible;
}

.menu-list  .ul-list{
  visibility: hidden;
  position: absolute;
  left: -45px;
  top: 55px;
  background: #5387f2;
  width: 160px;
  height: auto;
  text-align: center;
  box-sizing: border-box;
  padding: 15px 0;
  border-radius: 5px;
}
.menu-list .ul-list li{
  height:34px;
  line-height: 34px;
}
.menu-list .ul-list li a{
 color: #fff;
 font-size: 16px;
 text-align: center;
}
</style>
