<template>
    <div class="content">
       <Header></Header>
       <div class="banner-box"></div>
       <!-- 联系我们 -->
       <div class="contactUs-box">
           <div class="contactUs">
                <h4 class="TitleH4">
                    联系我们
                    <span></span>
                </h4>
                <div class="title">
                    有关参展、参观、研讨会等事宜请垂询:2021中国国际通信展组委会
                </div>
                <p>地址:北京·国家会议中心举办（北京市朝阳区天辰东路7号）名称:中邮国际展览广告有限公司&nbsp;邮箱:reedfuexpo@163.com</p>
                <p>电话:136  2180  5207  网址:http://www.ctxexpo.com</p>
                <div class="address">
                    <img src="@/assets/img/menu8/address.png" alt="" srcset="">
                </div>
                
                <div class="booth-booking">
                    <div class="title">展位预定</div>
                    <div class="content">
                        <div class="left">
                            <div>
                                <p>联系人:&nbsp;&nbsp;王浩135&nbsp;2161&nbsp;1210(微信)</p>
                                <p>咨询QQ:&nbsp;&nbsp;9339756(请注明公司)</p>
                            </div>
                            <div class="text">
                                <p>联系人:&nbsp;&nbsp;高鑫136&nbsp;2181&nbsp;1969（微信）</p>
                                <p>咨询QQ:&nbsp;&nbsp;3387941522(请注明公司)</p>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/assets/img/menu8/eqCode.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
       </div>
       <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
    name:'',
    data(){
        return{

        }
    },
    components:{
        Header,
        Footer
    }

}
</script>

<style scoped>
    /* banner图 */
    .banner-box{
        width: 100%;
        height: 622px;
        background:url('../assets/img/menu8/bg-banner.png') center no-repeat;
        background-size: 100% 100%;
    }

    /* 联系我们 */
    .contactUs-box{
        width: 100%;
        height: auto;
    }
    .contactUs{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        text-align: center;
        color: #000;
    }
    .contactUs .title{
        font-size: 16px;
        margin-bottom: 30px;
    }
    .contactUs p{
        font-size: 16px;
        text-align: center;
        line-height: 28px;
    }
    .contactUs .address{
        width: 1100px;
        height: 530px;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 70px;
    }
    .contactUs .address img{
        width: 1100px;
        height: 530px;
    }
    .booth-booking {
        text-align: left;
        width: 1100px;
        margin:  0 auto;
    }
    .booth-booking .title{
        font-size: 18px;
    }
     .booth-booking .content{
         display: flex;
         margin-bottom: 110px;
     }
    .booth-booking .content .left p{
        text-align: left;
        font-size: 16px;
        line-height: 26px;
    }
    .booth-booking .content .right img{
         width: 132px;
         height: 132px;
         margin-left: 75px;
     }
    .booth-booking .content .text{
        margin-top: 35px;
     }
</style>