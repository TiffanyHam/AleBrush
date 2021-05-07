/*
 * @Descripttion:
 * @version:
 * @Author: Tiffany
 * @Date: 2020-08-26 17:41:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-07 09:28:25
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 解决路由访问重复时报错问题：
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("../views/Main/Main.vue"),
      meta: {
        keepAlive: true, // 需要缓存
      }
    },
    {
      path: "/Setting",
      name: "Setting",
      component: () => import("../views/Setting/Setting.vue"),
      meta: {
        keepAlive: false,
      }
    },
    {
      path: "/TeethSteps",
      name: "TeethSteps",
      component: () => import("../views/TeethSteps/TeethSteps.vue"),
      meta: {
        keepAlive: false, 
      }
    },
    {
      path: "/BrushMethods",
      name: "BrushMethods",
      component: () => import("../views/BrushMethods/BrushMethods.vue"),
      meta: {
        keepAlive: false, 
      }
    },
    {
      path: "/CommonProblem",
      name: "CommonProblem",
      component: () => import("../views/CommonProblem/CommonProblem.vue"),
      meta: {
        keepAlive: false, 
      }
    },
    {
      path: "/RemainTime",
      name: "RemainTime",
      component: () => import("../views/RemainTime/RemainTime.vue"),
      meta: {
        keepAlive: false, 
      }
    },
    {
      path: "/BrushPosition",
      name: "BrushPosition",
      component: () => import("../views/BrushPosition/BrushPosition.vue"),
      meta: {
        keepAlive: false, 
      }
    },
    {
      path: "/animations",
      name: "animations",
      component: () => import("../views/BrushPosition/animations.vue"),
      meta: {
        keepAlive: false, 
      }
    },
    {
      path: "/Log",
      name: "Log",
      component: () => import("../views/Log/Log.vue"),
      meta: {
        keepAlive: false, 
      }
    },
    {
        path: "/BrushTeethModel",
        name: "BrushTeethModel",
        component: () => import("../views/BrushTeethModel/BrushTeethModel.vue"),
        meta: {
          keepAlive: false, 
        }
      }
      ,
    {
        path: "/video",
        name: "video",
        component: () => import("../views/video/video.vue"),
        meta: {
          keepAlive: false, 
        }
      }
  ]
});
// Router.beforeEach((to, from, next) => {
//   const meta = to.meta;
//   //if (window.hilink) window.hilink.setTitleVisible(!meta.hideSystemNav);
//   if (!meta.keepAlive)
//     document.body.scrollTop = document.documentElement.scrollTop = 0; //滚动到顶部
//   next();
// });