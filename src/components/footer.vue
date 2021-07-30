<template>
    <div class="content">
        <div class="footer-list">
            <div class="footer-list-box">
                <div class="list">
                    <h4>站点导航</h4>
                    <p><a href="###">网站首页</a>&nbsp;<a href="###">关于大会</a></p>
                    <p><a href="###">大会动态</a>&nbsp;<a href="###">工作组</a></p>
                    <p><a href="###">成果发布</a>&nbsp;<a href="###">供需对接</a></p>
                </div>
                <div class="list">
                    <h4>联系我们</h4>
                    <p><img src="../assets/img/index/icn1.png" alt="" srcset=""/><a href="">北京市海淀区花园北路52号&nbsp;100191</a></p>
                    <p><img src="../assets/img/index/icn2.png" alt="" srcset=""/><a href="">010-62300464</a></p>
                    <p><img src="../assets/img/index/icn3.png" alt="" srcset=""/><a href="">5gaia@5gaia.com</a></p>
                    <p><img src="../assets/img/index/icn4.png" alt="" srcset=""/><a href="http://www.5gaia.org.cn">http://www.5gaia.org.cn</a></p>
                </div>
                <div class="list">
                    <img src="../assets/img/index/EqCode.png" alt="" srcset="">
                    <p>IMT-2021(5G)大会<br/>微信公众号</p>
                </div>
                <div class="list">
                    <img src="../assets/img/index/footerLogo.png" alt="" srcset="">
                </div>
            </div>
            <div class="copy-box">&copy; 2021 IMT-2021(5G)大会 版权所有  深ICP备14039316号 深共网安备<img src="../assets/img/index/icon1.png" alt=""/>33010802009236号</div>
        </div>
        
    </div>
</template>
<script>
export default {
  name: 'Footer',
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
    .content{
        width: 100%;
        height: 405px;
        background: #010d57;
        text-align: left;
    }
    .footer-list{
        width: 1200px;
        height: 100%;
        margin: 0 auto; 
    }
    .footer-list-box{
        width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .footer-list-box .list{
        flex: auto;
        margin-top: 96px;
    }
    .footer-list-box .list:nth-last-of-type(1){
        text-align: right;
    }
    .footer-list-box .list:nth-of-type(2) img{
        margin-right:10px;
        float: left;
        margin-top: 11px;
        width: 10px;
        height: 10px;

    }
    .footer-list-box .list:nth-last-of-type(1) img{
        text-align: right;
        width: 380px;
        height: 76px;
    }
    .footer-list-box .list:nth-last-of-type(2){
        text-align: left;
        margin-left: 60px;
    }
    .footer-list-box .list:nth-last-of-type(2) img{
        width: 115px;
        height: 115px;
    }
    .footer-list-box .list:nth-last-of-type(2) p{
        text-align: left;
        display: block;
        color: #a6a6a6;
        font-size: 12px;
    }

    .footer-list-box .list h4{
        font-size: 18px;
        color: #a6a6a6;
        font-weight: 400;
        margin-bottom: 28px;
    }
    .footer-list-box .list p{
        line-height: 30px;
    }
     .footer-list-box .list a{
         color: #a6a6a6;
         line-height: 28px;
     }

    .copy-box{
        text-align: left;
        font-size: 12px;
        color: #a6a6a6;
        margin-top: 66px;
    }
    .copy-box img{
        width: 12px;
        height: 12px;
    }

</style>