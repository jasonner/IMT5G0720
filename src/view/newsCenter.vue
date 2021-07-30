<template>
    <div>
        <Header></Header>
        <div class="banner-box"></div>
        <!-- 新闻tab -->
        <div class="news-tab-box" id="assembly">
            <div class="news-tab">
                <button v-bind:class="{ active: isActive=='1'}" @click="isActive='1'">大会新闻</button>
                <button v-bind:class="{ active: isActive=='2'}" @click="isActive='2'">行业新闻</button>
            </div>
        </div>
        <!-- 新闻内容 -->
        <div class="news-content-box">
            <div class="news-content">
                <div class="list">
                    <div class="left">
                        <div class="title">金秋九月，蓄势前行--第30届中国国际信息通信展览会如期而..</div>
                        <div class="titme">2021年05月25日</div>
                        <div class="text">第30届中国国际信息通信展览会(PT EXPO CHINA2021简称“PT展”)将于2021年9月27日-29日在北京国家会议中心举办。历时30载，ICT行业规模最大的盛会将于金秋九月如期而至，携手全行业蓄势前行，赋能未来。</div>
                        <div class="btn"><button>查看完整新闻</button></div>
                    </div>
                    <div class="right">
                        <img src="@/assets/img/menu2/list1.png" alt="" srcset="">  
                    </div>
                </div>

                <div class="list">
                    <div class="left">
                        <div class="title">金秋九月，蓄势前行--第30届中国国际信息通信展览会如期而..</div>
                        <div class="titme">2021年05月25日</div>
                        <div class="text">第30届中国国际信息通信展览会(PT EXPO CHINA2021简称“PT展”)将于2021年9月27日-29日在北京国家会议中心举办。历时30载，ICT行业规模最大的盛会将于金秋九月如期而至，携手全行业蓄势前行，赋能未来。</div>
                        <div class="btn"><button>查看完整新闻</button></div>
                    </div>
                    <div class="right">
                        <img src="@/assets/img/menu2/list2.png" alt="" srcset="">  
                    </div>
                </div>

                <div class="list">
                    <div class="left">
                        <div class="title">金秋九月，蓄势前行--第30届中国国际信息通信展览会如期而..</div>
                        <div class="titme">2021年05月25日</div>
                        <div class="text">第30届中国国际信息通信展览会(PT EXPO CHINA2021简称“PT展”)将于2021年9月27日-29日在北京国家会议中心举办。历时30载，ICT行业规模最大的盛会将于金秋九月如期而至，携手全行业蓄势前行，赋能未来。</div>
                        <div class="btn"><button>查看完整新闻</button></div>
                    </div>
                    <div class="right">
                        <img src="@/assets/img/menu2/list3.png" alt="" srcset="">  
                    </div>
                </div>

                <div class="list">
                    <div class="left">
                        <div class="title">金秋九月，蓄势前行--第30届中国国际信息通信展览会如期而..</div>
                        <div class="titme">2021年05月25日</div>
                        <div class="text">第30届中国国际信息通信展览会(PT EXPO CHINA2021简称“PT展”)将于2021年9月27日-29日在北京国家会议中心举办。历时30载，ICT行业规模最大的盛会将于金秋九月如期而至，携手全行业蓄势前行，赋能未来。</div>
                        <div class="btn"><button>查看完整新闻</button></div>
                    </div>
                    <div class="right">
                        <img src="@/assets/img/menu2/list4.png" alt="" srcset="">  
                    </div>
                </div>

                <div class="list">
                    <div class="left">
                        <div class="title">金秋九月，蓄势前行--第30届中国国际信息通信展览会如期而..</div>
                        <div class="titme">2021年05月25日</div>
                        <div class="text">第30届中国国际信息通信展览会(PT EXPO CHINA2021简称“PT展”)将于2021年9月27日-29日在北京国家会议中心举办。历时30载，ICT行业规模最大的盛会将于金秋九月如期而至，携手全行业蓄势前行，赋能未来。</div>
                        <div class="btn"><button>查看完整新闻</button></div>
                    </div>
                    <div class="right">
                        <img src="@/assets/img/menu2/list5.png" alt="" srcset="">  
                    </div>
                </div>
                <!-- 分页 -->
                <div class="paging-box">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="100">
                    </el-pagination>
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
    data(){
        return{
            isActive:'1'
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
<style  scoped>
    /* banner图 */
    .banner-box{
        width: 100%;
        height: 622px;
        background:url('../assets/img/menu2/bg-banner.png') center no-repeat;
        background-size: 100% 100%;

    }
    
    /* 新闻Tab */
    .news-tab-box{
        width: 100%;
        height: 154px;
    }
    .news-tab-box .news-tab{
        width: 1200px;
        height: 154px;
        margin: 0 auto;
        padding-top: 56px;
        box-sizing: border-box;
    }
    .news-tab-box .news-tab button{
        width: 140px;
        height: 42px;
        border-radius: 5px;
        border:none;
        background: #b6b6b6;
        color: #fff;
        font-size: 23px;
        margin: 0 22px;
    }
    .news-tab-box .news-tab .active{
        background: #00a5f4;
    }

    /* 新闻内容 */
    .news-content-box{
        width: 100%;
    }
    .news-content{
        width: 1200px;
        margin: 0 auto;
    } 
    .news-content .list:nth-of-type(1){
        margin-top: 0px;
    }
    .news-content .list {
        display: flex;
        width: 1194px;
        height: 256px;
        margin: 0 auto;
        background: #fff;
        box-shadow: 10px 10px 10px #f0f0f0,-10px 10px 10px #f0f0f0;
        border: 1px solid #f0f0f0;
        border-radius: 5px;
        padding: 24px 40px;
        box-sizing: border-box;
        margin-top: 22px;
    }  
    .news-content .list .left{
        width: 694px;
        text-align: left;
    }
    .news-content .list .right{
        text-align: right;
        margin-left: 100px;
    }
    .news-content .list .right img{
        width: 325px;
        height: 203px;
    }
    .news-content .list .left .title{
        font-size: 20px;
        color: #595959;
        overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    }
    .news-content .list .left .titme{
        font-size: 12px;
        color: #acacac;
        margin-top: 14px;
    }
    .news-content .list .left .text{
        font-size: 14px;
        color: #333333;
        margin-top: 10px;
        line-height: 24px;
    }
    .news-content .list .left .btn button{
        width: 126px;
        height: 30px;
        background: #00a5f4;
        border: none;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        margin-top: 35px;
    }
    /* 分页 */
    .paging-box{
        width: 100%;
        height: 186px;
        text-align: center;
        padding-top: 44px;
        box-sizing: border-box;
    }
</style>