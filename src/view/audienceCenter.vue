<template>
    <div class="content">
        <Header></Header>
        <div class="banner-box"></div>
        <!-- 为何参展 -->
        <div class="why-participate-box" id="participate">
            <div class="why-participate">
                <h4 class="TitleH4">
                    为何参展
                    <span></span>
                </h4>
                <div class="title">
                    2019年中国国际信息通信展览会
                </div>
                <p>2019年10月31日至11月3日，由工业和信息化部主办的2019年中国国际信息通信展览会在北京国家会议中心成功举行。本届展会以“5G融合，共建万物互联的智能世界”为主题，吸引了来自世界各地的近400家企业与组织，参与人数达81.000余人。</p>
                <p>在展会开幕论坛上，工业和信息化部副部长陈肇雄、中国电信董事长柯瑞文、中国移动董事长杨杰、中国联通董事长王晓初、中国铁塔董事长佟吉禄共同启动5G商用，标志着我国5G商用进入新的征程，成为各行业乃至全国、全世界关注的焦点事件。</p>
                <p>据统计，本届展会共接待180余个企事业单位参观团组，85个地方政府团组;30余家中央企业高层领导、逾90个各省市运营商分公司高层领导带领参观。“巨变70年，信息通信业发展成就图片展”、智慧灯杆展区、工业互联网展区、“新一代宽带无线移动通信网”国家科技重大专项展区等主题展览吸引了大批团组观众。据第三方独立平台监测，整个展期共计10400家媒体、自媒体对展会进行了报道，各种新闻报道、解读分析刷屏。</p>
                <div class="img-list">
                    <img src="@/assets/img/menu5/list1.png" alt="" srcset="">
                    <img src="@/assets/img/menu5/list2.png" alt="" srcset="">
                    <img src="@/assets/img/menu5/list3.png" alt="" srcset="">
                </div>
            </div>
        </div>

        <!-- 展会现场 -->
        <div class="exhibition-scene-box" id="scene">
            <div class="exhibition-scene">
                <h4 class="TitleH4">
                    展会现场
                    <span></span>
                </h4>
                <!-- <p class="more">查看更多&nbsp;<span class="el-icon-arrow-right"></span></p> -->
                <div class="img-list">
                    <!-- <img src="@/assets/img/menu5/list4.png" alt="">
                    <img src="@/assets/img/menu5/list5.png" alt="">
                    <img src="@/assets/img/menu5/list6.png" alt=""> -->
                    <el-carousel :interval="4000" type="card" height="256px">
                        <el-carousel-item>
                            <img src="@/assets/img/menu5/list4.png" alt="">
                        </el-carousel-item>
                         <el-carousel-item>
                             <img src="@/assets/img/menu5/list5.png" alt="">
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="@/assets/img/menu5/list6.png" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>

        <!-- 宣传方案 -->
        <div class="publicity-programme-box" id="publicity">
            <div class="publicity-programme">
                <h4 class="TitleH4">宣传方案<span></span></h4>
                <ul>
                    <li>◇ &nbsp;广泛媒体言传通过专业杂志报刊石联网新媒体等及时发布展会广告及信息</li>
                    <li>◇ &nbsp;展会宣传:参加全国各地的相关展览会广泛散发资料吸引潜在用户扩大展会宣传</li>
                    <li>◇ &nbsp;主办单位邀请:通过主办单位独有平台邀请行业协会和团体科研单位和院校等组织专业人士观展</li>
                    <li>◇ &nbsp;寄发参观券通讨各种澳道发放一万张参观券/展会激请乐</li>
                </ul>
            </div>
        </div>

        <!-- 参会须知 -->
        <div class="notice-attending-box" id="notice">
            <div class="notice-attending">
                <h4 class="TitleH4">
                    参会须知
                    <span></span>    
                </h4>  
                <div class="title">
                   观众入场须知
                </div>
                <p>1展会面向专业人士开放，观众须持组委会赠送、邮寄的参观券进场参观;</p>
                <p>2、提前在展会官方网站“观众预登记”栏目填写登记申请，到展会现场“观众报到处”直接领取“专业观众证件”</p>
                <p>3、带两张以上名片到展会现场“观众报到处”直接换取“专业观众证件”;</p>
                <p>4、到展会现场“观众报到处”填表后换取“专业观众证件”;</p>
                <p>5、到展会现场“观众报到处”扫描博览会公众微信二维码直接换取“专业观众证件”</p>
                
                <div class="requirement">
                    <div class="title">
                        参观要求
                    </div>
                    <p>1、遵守会展中心和组委会制定的相关安全管理规定，服从现场保安人员指挥，文明参观</p>
                    <p>2、展览会主、承办单位出于公共安全的需要，在入口处安排安全检查，请进馆的所有人员配合进行安全检查</p>
                    <p>3、贵重物品请自行妥善保管，不要随身带入场馆，如有遗失，责任自负。</p>
                    <p>4、参观人员不得在展区内从事任何宣传活动。</p>
                    <p>5、参观相关活动表演，须服从保安人员的指挥和调度，不得拥挤、哄抢，不得堵塞展馆进出口、安全通道、固定消防设施等</p>
                    <p>6、采购样品出馆，须到组委会处登记，经核查开据产品出门单，方能出馆。</p>
                    <p>7、展览期间，展区严禁使用明火。</p>
                    <p>8、请保持展馆的清洁卫生严楚在馆内吸烟严婪随地叶癌，乱扔果皮，纸居等废弃物。</p>
                </div>
            </div>
        </div>

        <!-- 商展推介 -->
        <div class="promotion-box" id="promotion">
            <div class="promotion">
                <h4 class="TitleH4">
                    商展推介
                    <span></span>
                </h4>
                <div class="list">
                    <img src="@/assets/img/menu5/clubs.png" alt="" srcset="">
                </div>
                <div class="show-more">
                    <p>显示更多</p>
                    <p class="el-icon-arrow-down"></p>
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
    name:'audienceCenter',
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

    },

}
</script>
<style scoped>
    /* banner图 */
    .banner-box{
        width: 100%;
        height: 622px;
        background:url('../assets/img/menu5/bg-banner.png') center no-repeat;
        background-size: 100% 100%;
    }

    /* 为何参展 */
    .why-participate-box{
        width: 100%;
        height: auto;
    }
    .why-participate{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
    .why-participate .title{
        font-size: 18px;
    }
    .why-participate p{
        text-align: left;
        font-size: 16px;
        line-height: 26px;
        margin-top: 32px;
    }
    .why-participate .img-list{
        display: flex;
        width: 100%;
        margin-top: 32px;
        text-align: center;
    }
    .why-participate .img-list img, .exhibition-scene .img-list img{
        width: 384px;
        height: 256px;
        margin-right: 25px;
    }

    /* 展会现场 */
    .exhibition-scene-box{
        width: 100%;
        height: auto;
    }
    .exhibition-scene{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
    .exhibition-scene .more{
        font-size: 13px;
        cursor: pointer;
        height: auto;
        text-align: right;
    }

    /* 宣传方案 */
    .publicity-programme-box{
        width: 100%;
        height: auto;
    }
    .publicity-programme{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
    .publicity-programme ul li{
        line-height: 26px;
        font-size: 16px;
    }

    /* 参会须知 */
    .notice-attending-box{
        width: 100%;
        height: auto;
    }
    .notice-attending{
        height: auto;
        width: 1200px;
        margin: 0 auto;
    }
    .notice-attending .title{
        font-size: 18px;
        margin-bottom: 10px;
    }

    .notice-attending p{
        font-size: 14px;
        line-height: 26px;
    }
    .notice-attending .requirement .title{
        margin-top: 56px;
    }   

    /* 商展推介 */
    .promotion-box {
        width: 100%;
        height: auto;
    }
    .promotion{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
    .promotion .list img{
        width: 1150px;
        height: auto;
    }
    .promotion  .show-more{
        font-size: 18px;
        margin-bottom: 60px;
        color: #545555;
    }


</style>