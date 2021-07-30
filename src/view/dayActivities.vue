<template>
    <div class="content">
        <Header></Header>
        <div class="banner-box"></div>
        <!-- IC中国·高层论坛 -->
        <div class="IC-forum-box">
            <div class="IC-forum">
                <h4 class="TitleH4">
                    ICT中国·高层论坛
                    <span></span>
                </h4>
                <p>“ICT中国·高层论坛”由工业和信息化部主办，一贯秉承“国际视野、专业深度、品牌立场、创新精神”，在国内外政府及信息通信领域享有盛誉，成为汇聚产业各方精英人土，探讨合作交流的高层平台，是全球ICT企业的年度盛会。本届论坛广泛涉猎信息通信领域的前沿热点，并在政策监管、技术发展、融合创新、国际合作等方面做深入研讨。论坛主题将涵盖5G、云计算、大数据、物联网、SDN/NFV、人工智能、虚拟现实、增强现实等行业前沿领域，以及电子商务、智慧物流、数字医疗、信息安全等行业热门话题。</p>
                <div class="nav-img">
                    <img src="@/assets/img/menu4/nav.png" alt="" srcset="">
                </div>
                
            </div>
        </div>

        <!-- 2021议题聚焦 -->
        <div class="topic-focus-box">
            <div class="topic-focus">
                <h4 class="TitleH4">
                    2021议题聚焦
                    <span></span>
                </h4>
                <div class="net-img">
                    <img src="@/assets/img/menu4/5G.png" alt="" srcset="">
                </div>
            </div>
        </div>

        <!-- 嘉宾 -->
        <div class="distinguished-guest-box">
            <div class="distinguished-guest">
                <h4 class="TitleH4">往期论坛嘉宾<span></span></h4>
                <div class="content">
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user1.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>王金辉</h6>
                            <p>华为技术有限公司传送接入营销运作部总裁</p>
                        </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user2.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>欧阳晔</h6>
                            <p>亚信科技控股有限公司，高级副总裁、首席技术官</p>
                        </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user3.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>赵勇杰</h6>
                            <p>本源量子副总裁</p>
                        </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user4.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>翁文康</h6>
                            <p>华为技术有限公司量子计算软件与算法首席科学家</p>
                        </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user5.png" alt="" srcset="">
                        </div>
                         <div class="text-content">
                             <h6>赵越</h6>
                            <p>联通大数据有限公司总经理</p>
                         </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user6.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>单光存</h6>
                            <p>北京航空航天大学项目主任教授</p>
                        </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user7.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>姜辉</h6>
                            <p>深圳数位传媒科技有限公司副总裁</p>
                        </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user8.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>杨晓华</h6>
                            <p>华为技术有限公司</p> 
                        </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user9.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>陈超</h6>
                            <p>上海燧原科技有限公司-资深产品总监</p>
                        </div>
                    </div>
                    <div class="list">
                        <div>
                            <img src="@/assets/img/menu4/user10.png" alt="" srcset="">
                        </div>
                        <div class="text-content">
                            <h6>王翔</h6>
                            <p>中兴通讯股份有限公司首席战略官司高级副总裁</p>
                        </div>
                    </div>
                </div>
                <div class="lookMore"><button type="primary">查看更多</button></div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
    name:"dayActivities",
    data(){
        return{

        }
    },
    components:{
        Header,
        Footer
    },
    mounted(){

    },

    methods:{

    }
}
</script>
<style scoped>
    /* banner图 */
    .banner-box{
        width: 100%;
        height: 622px;
        background:url('../assets/img/menu4/bg-banner.png') center no-repeat;
        background-size: 100% 100%;

    }
    
    /* IC中国·高层论坛 */
    .IC-forum-box{
        width: 100%;
        height: auto;
    }
    .IC-forum-box .IC-forum{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
    .IC-forum-box .IC-forum p{
        font-size: 14px;
        line-height: 25px;
        text-align: left;
    }
    .IC-forum-box .IC-forum .nav-img img{
        width: 100%;
        height: auto;
        margin-top: 58px;
    }

    /*2021议题聚焦 */
    .topic-focus-box{
        width: 100%;
        height: auto;
    }
    .topic-focus-box .topic-focus{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
    .topic-focus-box .topic-focus .net-img img{
        width: 100%;
        height: auto;
    }

    /* 往期论坛嘉宾 */
    .distinguished-guest-box{
        width: 100%;
        height: auto;
    }
    .distinguished-guest{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
    .distinguished-guest .content{
        width: 110%;
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        align-content: flex-start;
    }
    .distinguished-guest .content .list{
        width: 222px;
        height: auto;
        box-sizing: border-box;
        margin-right: 22px;
        margin-bottom: 34px;
        border: 1px solid #dfdfdf;
    }
    .distinguished-guest .content .list .text-content{
         height: 108px;
         padding-top: 18px;
         box-sizing: border-box;
        margin-top: -5px;
    }
    .distinguished-guest .content .list .text-content:hover{
        background: #5588f2;
        height: auto;
        height: 108px;
        padding-top: 18px;
        box-sizing: border-box;
        margin-top: -5px;
    }
    .distinguished-guest .content .list div img{
        width: 100%;
        height: auto;
    }

    .distinguished-guest .content .list h6{
        font-size: 20px;
        color: #2c2a2a;
        
    }
    .distinguished-guest .content .list p{
        font-size: 14px;
        color: #2c2a2a;
        margin-top: 15px;
        padding: 0 32px;
        box-sizing: border-box;
    }
    .distinguished-guest .content .list .text-content:hover p{
        color: #fff;
    }
    .distinguished-guest .content .list .text-content:hover h6{
        color: #fff;
    }
     .distinguished-guest .lookMore button {
        width: 126px;
        height: 40px;
        background: #5588f2;
        color: #fff;
        border-radius: 10px;
        border: none;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        margin-bottom: 44px;
    }

</style>