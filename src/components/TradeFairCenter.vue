<template>
    <div class="content">
        <div class="trade-fair-center-box">
            <div class="trade-fair-center">
                <h4>
                    展商中心
                    <span></span>
                </h4>
                <p class="more">更多动态&nbsp;<span class="el-icon-arrow-right"></span></p>
                <div class="content">
                        <div class="left">
                            <div class="left-top">
                                <div><img src="../assets/img/index/suv1.png" alt="" srcset=""></div>
                                <div></div>
                            </div>
                            <div class="left-bottom">
                                <div class="left-bottom-img1"><img src="../assets/img/index/new3.png" alt="" srcset=""></div>
                                <div class="left-bottom-img2"><img src="../assets/img/index/new2.png" alt="" srcset=""></div>
                            </div>
                        </div>
                        <div class="right"><img src="../assets/img/index/new1.png" alt="" srcset=""></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'TradeFairCenter',
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
    /* 商展中心 */
.trade-fair-center-box{
    width: 100%;
    height: 600px;
}
.trade-fair-center{
    width: 1200px;
    margin: 0 auto;
}
.trade-fair-center h4{
    font-size: 24px;
    position: relative;
    font-weight: 500;
    height: 76px;
}
.trade-fair-center h4 span{
    position: absolute;
    left: 570px;
    top: 40px;
    width: 70px;
    height: 3px;
    background: #5588f2;
    border-radius: 50px;
}
.trade-fair-center .more{
    height: 30px;
    font-size: 13px;
    margin-top: 0px;
    text-align: right;
    cursor: pointer;
}
.trade-fair-center .content{
    width: 1200px;
    height: 412px;
    display: flex
}
.trade-fair-center .content .left{
    width: 763px;
    height: 412px;
} 
.trade-fair-center .content .right{
    width: 423px;
    height: 412px;
    margin-left: 16px;
} 

.trade-fair-center .content .left .left-top{
    width: 100%;
    height: 202px;
}
.trade-fair-center .content .left .left-bottom{
    width: 100%;
    height: 196px;
    margin-top: 14px;
    display: flex;
}
.trade-fair-center .content .left .left-bottom-img1{
    width: 372px;
    height: 196px;
}

.trade-fair-center .content .left .left-bottom-img2{
    width: 372px;
    height: 196px;
    margin-left: 18px;
}
.trade-fair-center .content img{
    width: 100%;
    height: 100%;
}
</style>