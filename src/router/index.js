/*
 * @Descripttion:
 * @version:
 * @Author: Tiffany
 * @Date: 2020-08-26 17:41:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-26 15:41:36
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("../views/Main/Main.vue")
    },
    {
      path: "/animations2",
      name: "animations2",
      component: () => import("../views/Main/animations2.vue")
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
  ]
});
