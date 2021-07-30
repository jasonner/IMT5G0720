<template>
    <div class="content">
        <Header></Header>
        <div class="banner-box"></div>
        <!-- 观众报名 -->
        <div class="audience-registration-box" id="audience">
            <div class="audience-registration">
                <h4 class="TitleH4">
                    观众报名
                    <span></span>
                </h4>
                <div class="list">
                    <div class="tip">请您根据贵公司的参展计划，认直填写本电请表，并在核对所填信息准确无误后提交确认，我们将根据展位规划提供展位图给您，确定展位位置。</div>
                    <form action="###" method="post">
                        <div class="company-name">
                            <label for="companyName">企业名称:</label>
                            <input type="text" autocomplete="off" name="companyName" id="companyName">
                        </div>
                        <div class="name">
                            <label for="name">联系人:</label>
                            <input type="text" autocomplete="off" name="name" id="name">
                            <label for="sex">性别:</label>
                            <input type="radio" name="sex" checked><label for="sex">男</label>
                            <input type="radio" name="sex" ><label for="sex">女</label>
                        </div>
                        <div class="tel">
                           <label for="tel">联系电话:</label>
                           <input type="tel" autocomplete="off" name="tel" id="tel">
                           <label for="email">邮箱:</label>
                           <input type="email" name="email" id="email">
                        </div>
                        <div class="mobile">
                            <label for="mobile">手机:</label>
                            <input type="tel" autocomplete="off" name="mobile" id="mobile">
                            <label for="position">职务:</label>
                            <input type="text" name="position" id="position">
                        </div>
                        <div class="website">
                            <label for="website">公司网址:</label>
                            <input type="text" name="website" id="website">
                            <label for="address">公司地址:</label>
                            <input type="text" name="address" id="address">
                        </div>
                        <div class="website">
                            <label for="StandardBooth">标准展位:</label>
                            <input type="text" name="StandardBooth" id="StandardBooth">
                            <label for="Booth">光地展位:</label>
                            <input type="text" name="Booth" id="Booth">
                        </div>
                        <div class="company-name leaving-message">
                            <label for="companyName">详情留言:</label>
                            <input type="text" autocomplete="off" name="companyName" id="companyName">
                        </div>
                        <div class="channel">
                            <p>您通过何种渠道得知本展会:</p>
                            <div class="channel-text">
                                <input type="radio" name="channel" id="channel1">
                                <label for="channel1">传统媒体报纸</label>

                                <input type="radio" name="channel" id="channel2">
                                <label for="channel2">网络媒体</label>

                                <input type="radio" name="channel" id="channel3">
                                <label for="channel3">合作伙伴</label>
                               
                                <input type="radio" name="channel" id="channel4">
                                <label for="channel4">展会官网网站</label>
                                
                                <input type="radio" name="channel" id="channel5">
                                <label for="channel5">展会官方微信</label>
                                
                                <input type="radio" name="channel" id="channel6">
                                <label for="channel6">组委会销售人员</label>
                                
                                <input type="radio" name="channel" id="channel7">
                                <label for="channel7">其他</label>
                                
                            </div>
                        </div>
                        <div class="product">
                            <label for="product">主要产品:</label>
                            <textarea name="" id="product" cols="30" rows="10"></textarea>
                        </div>
                        <div class="product">
                            <label for="product">应用领域:</label>
                            <textarea name="" id="product" cols="30" rows="10"></textarea>
                        </div>
                        <div class="submit-btn">
                            <button type="submit">确认提交</button>
                        </div>
                    </form>
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
    name:'registration',
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
</script>
<style scoped>
    /* banner图 */
    .banner-box{
        width: 100%;
        height: 622px;
        background:url('../assets/img/menu6/bg-banner.png') center no-repeat;
        background-size: 100% 100%;
    }

    /* 观众报名*/
    .audience-registration-box{
        width: 100%;
        height: auto;
    }
    .audience-registration{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        margin-bottom: 158px;
    }
    .audience-registration .list{
        width: 1174px;
        height: auto;
        border: 1px solid #cbcbcb;
        padding: 75px 150px;
        box-sizing: border-box;
        font-size: 16px;
        color: #000;
        text-align: left;
    }
    .audience-registration .list .tip{
        font-size: 16px;
        text-align: left;
        line-height: 24px;
        color: #000;
    }
    .audience-registration .company-name{
        width: 100%;
        height: auto;
        margin-top: 40px;
    }
    .audience-registration  label{
        font-size: 18px;
        color: #000;
        margin-right: 36px;
        width: 80px;
        text-align: left;

    }
    .audience-registration .company-name input{
        width: 746px;
        height: 45px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline-color:#1e7be2;
    }
    .audience-registration .name{
        margin-top: 24px;
    }
    .audience-registration .name input:nth-of-type(1){
        width: 282px;
        height: 45px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline-color:#1e7be2;
        margin-right:  70px;
    }
    .audience-registration .name input:nth-of-type(2),.audience-registration .name input:nth-of-type(3){
        width: 20px;
        height: 20px;
        font-size: 18px;
        margin-right: 10px;
    }
    .audience-registration .name label{
        margin-right: 54px;
    }
    .audience-registration .tel input{
        width: 282px;
        height: 46px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline-color:#1e7be2;
        margin-top: 24px;
    }
    .audience-registration .tel input:nth-of-type(1){
        margin-right: 70px;
    }
    .audience-registration .tel label{
        margin-right: 36px;
    }
     .audience-registration .tel label:nth-of-type(2){
         margin-right: 70px;
     }

    .audience-registration .mobile{
        margin-top: 20px;
    }
    .audience-registration .mobile input{
        width: 282px;
        height: 46px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline-color:#1e7be2;
    }
    .audience-registration .mobile label{
        margin-right: 72px;
    }
    .audience-registration .mobile input:nth-of-type(1) {
        margin-right: 70px;
    }    
    .audience-registration .mobile label:nth-of-type(2){
        margin-right:  70px;
    }
    .audience-registration .website{
        margin-top: 20px;
    }
    .audience-registration .website input{
        width: 282px;
        height: 46px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline-color:#1e7be2;
    }
    .audience-registration .website input:nth-of-type(1){
        margin-right: 70px;
    }
   .audience-registration-box .audience-registration .leaving-message{
       margin-top: 20px;
    }

    .audience-registration-box .audience-registration .channel{
        font-size: 16px;
        margin-top: 58px;
        height: 90px;
    }
    .audience-registration-box .audience-registration .channel label{
        font-size: 16px;
        float: left;
        width:unset;
        margin: 0 10px;
    }
    .audience-registration-box .audience-registration .channel input{
        width: 16px;
        height: 16px;
        float: left;
        margin-top: 5px;
    }
    .channel-text{
        margin-top: 25px;
    }
    .product{
        margin-top: 32px;
    }
    .product label{
        float: left;
        font-size: 18px;
    }
    .product textarea{
        width: 746px;
        outline-color:#1e7be2;
    }
    .submit-btn{
        text-align: center;
        margin-top: 60px;
    }
    .submit-btn button{
        width: 126px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        border: none;
        background: #5588f2;
    }
</style>