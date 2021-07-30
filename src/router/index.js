import Vue from 'vue'
import Router from 'vue-router'

import index from "@/view/index.vue";
import conferenceDetail from "@/view/conferenceDetail.vue";
import newsCenter from "@/view/newsCenter.vue";
import tradeFair from "@/view/tradeFair.vue";
import dayActivities from "@/view/dayActivities.vue";
import audienceCenter from "@/view/audienceCenter.vue";
import registration from "@/view/registration.vue"; //
import contactUs from "@/view/contactUs.vue";
Vue.use(Router)
export const constantRouterMap =[
    {
        path:'/',
        name:'首页',
        redirect:'/index',
        menuShow:false
    },
    {
        path:'/index',
        name:'首页',
        component: index,
        menuShow:false
    },
    {
        path:'/conferenceDetail',
        name:'大会概况',
        component: conferenceDetail,
        menuShow:false
    },
    {
        path:'/newsCenter',
        name:'新闻中心',
        component: newsCenter,
        menuShow:false
    },
    {
        path:'/tradeFair',
        name:'商展中心',
        component: tradeFair,
        menuShow:false
    },
    {
        path:'/dayActivities',
        name:'同期活动',
        component: dayActivities,
        menuShow:false
    }, 
    {
        path:'/audienceCenter',
        name:'观众中心',
        component: audienceCenter,
        menuShow:false
    },
    {
        path:'/registration',
        name:'注册登记',
        component: registration,
        menuShow:false
    },
    {
        path:'/contactUs',
        name:'联系我们',
        component: contactUs,
        menuShow:false
    },
    {
        path: "*",
        redirect: "/index"
    }
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
export default new Router({
    routes: constantRouterMap
})