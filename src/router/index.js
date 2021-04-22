/*
 * @Descripttion:
 * @version:
 * @Author: Tiffany
 * @Date: 2020-08-26 17:41:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-22 12:08:17
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
      component: () => import("../views/Main/Main.vue")
    },
    {
      path: "/Setting",
      name: "Setting",
      component: () => import("../views/Setting/Setting.vue")
    },
    {
      path: "/TeethSteps",
      name: "TeethSteps",
      component: () => import("../views/TeethSteps/TeethSteps.vue")
    },
    {
      path: "/BrushMethods",
      name: "BrushMethods",
      component: () => import("../views/BrushMethods/BrushMethods.vue")
    },
    {
      path: "/CommonProblem",
      name: "CommonProblem",
      component: () => import("../views/CommonProblem/CommonProblem.vue")
    },
    {
      path: "/RemainTime",
      name: "RemainTime",
      component: () => import("../views/RemainTime/RemainTime.vue")
    },
    {
      path: "/BrushPosition",
      name: "BrushPosition",
      component: () => import("../views/BrushPosition/BrushPosition.vue")
    },
    // {
    //   path: "/animationsNew",
    //   name: "animationsNew",
    //   component: () => import("../views/BrushPosition/animationsNew.vue")
    // },
    {
      path: "/animations",
      name: "animations",
      component: () => import("../views/BrushPosition/animations.vue")
    },
    {
      path: "/Log",
      name: "Log",
      component: () => import("../views/Log/Log.vue")
    },
  ]
});
