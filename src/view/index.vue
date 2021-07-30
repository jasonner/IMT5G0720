<template>
    <div class="content">
        <Header></Header>
        <!-- banner图 -->
        <Banner></Banner>
        <!-- 关于IMT -->
        <div class="about-IMT-box">
            <div class="about-IMT">
                <h4>
                    关于IMT-2021(5G)大会
                    <span></span>
                </h4>
                <p>为促进我国5G应用产业创新发展,助力5G商用,在工业和信息化部的大力支持和指导下，由中国信息通信研究院联合行业企事业单位,运营企业,产业制造企业,互联网企业,应用开发企业,金融投资服务机构,研究机构和高等院校等于2019年6月21日共同发起成立。</p>
                <button @click="lookMore()">了解更多</button>
            </div>
        </div>
        
        <!--更多介绍-->
        <div class="more-introduce-box">
            <div class="more-introduce">
                <div class="list1 list">
                    <div class="clock">
                        <img src="@/assets/img/index/icon-clock.png" alt="" srcset="">
                    </div>
                    <div class="title">
                        日程安排    
                    </div>
                    <div class="content">
                        JSK心康H3智能手环是一款监测心血管健康的智能手环，可随时随地监测用户的心血管健康状况，测量HRV疲劳度，拥有24小时心率，运动和睡眠监测功能。
                    </div>
                </div>
                <div class="list2 list">
                    <img src="@/assets/img/index/list3.png" alt="" srcset="">
                </div>
                <div class="list3 list">
                    <div class="clock">
                        <img src="@/assets/img/index/icon3.png" alt="" srcset="">
                    </div>
                    <div class="title">
                        组织机构   
                    </div>
                    <div class="content">
                       会员大会  理事会，秘书处<br/>
                       行业应用工作组，产业推进工作组，投资融资工作组。
                    </div>
                </div>
                <div class="list4 list">
                    <img src="@/assets/img/index/list1.png" alt="" srcset="">
                </div>
                <div class="list5 list">
                    <div class="clock">
                        <img src="@/assets/img/index/icon4.png" alt="" srcset="">
                    </div>
                    <div class="title">
                        大会章程   
                    </div>
                    <div class="content">
                        <p>第一章&nbsp;总则</p>
                        第一条 本方阵名称为 &nbsp;5G应用产业方阵，英文名称为5G&nbsp;Applications Industry  Arry,简称5GAIA。  
                    </div>
                </div>
                <div class="list6 list">
                    <img src="@/assets/img/index/list2.png" alt="" srcset="">
                </div>
            </div>
        </div>

        <!--大会新闻-->
        <ConferenceNews></ConferenceNews>   
        <!-- 展商中心 -->
        <TradeFairCenter></TradeFairCenter>
        <!-- 底部 -->
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import TradeFairCenter from '@/components/TradeFairCenter.vue'
import ConferenceNews from '@/components/ConferenceNews.vue'
import Banner from '@/components/Banner.vue'
export default {
    name:'index',
    data(){
        return{
            
        }
    },
    components:{
        Header,
        Footer,
        TradeFairCenter,
        ConferenceNews,
        Banner
    },
    mounted(){

    },
    methods:{
        // 了解更多
        lookMore:function(){
            console.log('3333');
        },

        
    }

}
</script>
<style scoped>
/* 关于IMY */
.about-IMT-box{
    width: 100%;
    height: 330px;
}
.about-IMT-box .about-IMT{
    width: 1200px;
    margin: 0 auto;
    height: 330px;
    text-align: center;
    padding-top: 66px;
    box-sizing: border-box;
}
.about-IMT-box .about-IMT h4{
    font-size: 24px;
    position: relative;
    font-weight: 500;
}
.about-IMT-box .about-IMT h4 span{
    position: absolute;
    left: 570px;
    top: 40px;
    width: 70px;
    height: 3px;
    background: #5588f2;
    border-radius: 50px;
}
.about-IMT-box .about-IMT p{
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 3.2px;
    margin-top: 62px;
}
.about-IMT-box .about-IMT button{
    width:126px;
    height: 38px;
    border: 1px solid #5588f1;
    background: #5588f1;
    color: #fff;
    border-radius: 8px;
    margin-top: 45px;
    font-size: 14px;
}


/* 更多介绍 */
.more-introduce-box{
    width: 100%;
    height: 802px;
}
.more-introduce{
    width: 1200px;
    margin: 0 auto;
    height: 802px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-content: flex-start;
    text-align: center;
}
.more-introduce .list{
    flex:unset;
    width: 354px;
    height: 354px;
    margin:18px 23px;
    background:#5387f2;
    opacity: 0.9;
    order:3;
    border-radius: 8px;
    text-align: center;
}
.more-introduce .list img{
    width: 100%;
    height: 100%;
}
.more-introduce .list:nth-of-type(2n){
    background: #fff;
}
.more-introduce  .list:nth-of-type(2n+1) .clock{
     width: 354px;
    height: 62px;
    text-align: center;
    margin-top: 60px;
}
.more-introduce  .list:nth-of-type(2n+1) img{
    width: 62px;
    height: 62px;
}

.more-introduce .list:nth-of-type(2n+1) .title{
    width: 290px;
    margin: 0 auto;
    font-size: 18px;
    color: #fff;
    margin-top: 18px;
    height: 40px;
    border-bottom: 1px solid #fff;
}
.more-introduce .list:nth-of-type(2n+1) .content{
    font-size: 13px;
    color: #fff;
    text-align: left;
    padding: 48px;
    box-sizing: border-box;
}
.more-introduce .list5 .content{
    padding:48px !important;
}
.more-introduce .list5 .content p{
    margin-bottom: 26px;
}
@media (width: 1280px){
  .more-introduce .list5 .content{
    padding:20px 48px !important;
     font-size: 12px;
    }
}







</style>