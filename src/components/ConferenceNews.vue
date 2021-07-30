<template>
    <div class="conference-News-box">
        <div class="conference-News">
            <h4>
                大会新闻
                <span></span>
            </h4>
            <p class="more">更多动态&nbsp;<span class="el-icon-arrow-right"></span></p>
            <el-carousel :interval="4000" indicator-position="none" type="card" class="list" :autoplay="true">
                    <el-carousel-item class="item">
                        <div class="img-box"><img src="../assets/img/index/suv2.png" alt="" srcset=""></div>     
                        <h4>大会咨询</h4>
                        <div class="title">
                            <div>2020-06-06</div>
                            <p>第三届"绽放杯"5G应用征集大赛正式启动</p>
                        </div>
                        <div class="content">
                            <div>2020-06-06</div>
                            <p>两会专访|全国人大代表，中国信息通信研究院院长刘多：发力新基建......</p>
                        </div>
                        <div class="look-more">
                            <button>点击查看</button> 
                            <span class="el-icon-view">&nbsp;5</span>    
                        </div>
                    </el-carousel-item>
                        <el-carousel-item class="item">
                        <div class="img-box"><img src="../assets/img/index/suv3.png" alt="" srcset=""></div>     
                        <h4>大会咨询</h4>
                        <div class="title">
                            <div>2020-06-06</div>
                            <p>第三届"绽放杯"5G应用征集大赛正式启动</p>
                        </div>
                        <div class="content">
                            <div>2020-06-06</div>
                            <p>两会专访|全国人大代表，中国信息通信研究院院长刘多：发力新基建......</p>
                        </div>
                        <div class="look-more">
                            <button>点击查看</button> 
                            <span class="el-icon-view">&nbsp;5</span>    
                        </div>
                    </el-carousel-item>
                    <el-carousel-item class="item">
                        <div class="img-box"><img src="../assets/img/index/suv4.png" alt="" srcset=""></div>     
                        <h4>大会咨询</h4>
                        <div class="title">
                            <div>2020-06-06</div>
                            <p>第三届"绽放杯"5G应用征集大赛正式启动</p>
                        </div>
                        <div class="content">
                            <div>2020-06-06</div>
                            <p>两会专访|全国人大代表，中国信息通信研究院院长刘多：发力新基建......</p>
                        </div>
                        <div class="look-more">
                            <button>点击查看</button> 
                            <span class="el-icon-view">&nbsp;5</span>    
                        </div>
                    </el-carousel-item>
                    <el-carousel-item class="item">
                        <div class="img-box"><img src="../assets/img/index/suv5.png" alt="" srcset=""></div>     
                        <h4>大会咨询</h4>
                        <div class="title">
                            <div>2020-06-06</div>
                            <p>第三届"绽放杯"5G应用征集大赛正式启动</p>
                        </div>
                        <div class="content">
                            <div>2020-06-06</div>
                            <p>两会专访|全国人大代表，中国信息通信研究院院长刘多：发力新基建......</p>
                        </div>
                        <div class="look-more">
                            <button>点击查看</button> 
                            <span class="el-icon-view">&nbsp;5</span>    
                        </div>
                    </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Trade-Fair-Center',
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
  /* 大会新闻 */
.conference-News-box{
    width: 100%;
    height:auto;
}
.conference-News-box .conference-News{
    width: 1200px;
    margin: 0 auto;
    height: auto;
    text-align: center;
}
.conference-News-box .conference-News .list{
    margin-top: 62px;
    width: 100%;
}
.conference-News-box .conference-News h4{
    font-size: 24px;
    position: relative;
    font-weight: 500;
}
.conference-News-box .conference-News h4 span{
    position: absolute;
    left: 570px;
    top: 40px;
    width: 70px;
    height: 3px;
    background: #5588f2;
    border-radius: 50px;
   
}

.conference-News .el-carousel__item:nth-child(2n) {
    background-color: #fff;
    border: 2px solid #f0f0f0;
}

.conference-News .el-carousel__item{
    width: 238px;
    height: 310px;
    border-radius:10px;
    border: 1px solid #cfcfcf;
    padding: 10px;
}


.conference-News .el-carousel__item:nth-child(2n+1) {
  background-color: #fff;
  border: 2px solid #f0f0f0;
}
.conference-News-box .conference-News .list{
    height: 480px !important;
    margin-top: 56px;
    border-radius: 10px;
}
.conference-News .el-carousel__item, .el-carousel__mask{
    left: 180px;
}
 .conference-News-box  .conference-News .more{
    float: right;
    font-size: 13px;
    margin-top: 50px;
    cursor: pointer;
}
.conference-News .el-carousel__container{
    width: 100%;
    height: 426px;
}

.conference-News .el-carousel__container .is-active{
    transform: translateX(230px) scale(1) !important;
    width: 410px;
    height: 426px;
    box-shadow: -10px 1px 10px #dfdfdf,10px 1px 10px #dfdfdf;
    margin-right: 40px;
    border-top: 2px solid #5387f2;
    background: #fff;
    border: 1px solid #f7f7f7;
    border-radius: 10px;
    padding: 0 32px;
    box-sizing: border-box;
    border-radius: 14px;
    
}
.conference-News .el-carousel__container .is-active:after{
    position: absolute;
    top: 0;
    left: 0;
    width: 412px;
    height: 100%;
    box-shadow: 10px 10px 10px #000;
    content:""
}
.conference-News .el-carousel__container .is-active .img-box img{
    height: 213px;
    width: 344px;
}
.conference-News .item .img-box img{
    width: 100%;
    margin-top: 4%;
    height: 132px;
}
.conference-News .item h4{
    font-size: 14px;
    text-align: left;
    margin-top: 10px;
}
.conference-News .item .title div{
    font-size: 8px;
    text-align: left;
    margin-top: 6px;
    color: #acacac;
}
.conference-News .item .title p{
    font-size: 10px;
    margin-top: 6px;
    border-bottom: 2px solid #cfcfcf;
    padding-bottom: 3px;
}
.conference-News .item .content div{
    font-size: 8px;
    margin-top: 6px;
    color: #acacac;
}
.conference-News .item .content p{
    font-size: 10px;
    margin-top: 6px;
    width: 100%;
    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    border-bottom: 2px solid #cfcfcf;
    padding-bottom: 3px;
}

.conference-News .item  .look-more  button{
    width: 124px;
    height: 28px;
    background: #00a5f4;
    border: 1px solid #00a5f4;
    border-radius: 5px;
    float: left;
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
}

.conference-News .item  .look-more span{
    float: right;
    font-size: 12px;
    margin-top: 23px;
}
.conference-News .item .title,.conference-News .item .content{
    font-size: 12px;
    text-align: left;
}
@media (width: 1280px){
  .conference-News .el-carousel__item{
    width: 248px;
    height: 410px;
    border-radius:10px;
    border: 1px solid #cfcfcf;
    padding: 0 10px;
}
.conference-News .el-carousel__container .is-active{
    transform: translateX(230px) scale(1) !important;
    width: 400px;
    height: 460px;
    box-shadow: -10px 1px 10px #dfdfdf;
    margin-right: 40px;
    border-top: 2px solid #5387f2;
    background: #fff;
    border: 1px solid #f7f7f7;
    border-radius: 10px;
    padding: 0 32px;
    box-sizing: border-box;
}
}
</style>