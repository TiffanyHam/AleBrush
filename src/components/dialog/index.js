/*
 * @Descripttion: 
 * @version: 
 * @Author: Tiffany
 * @Date: 2020-12-23 10:06:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-24 16:55:34
 */
import Vue from 'vue'
import dialog from './index.vue'
import i18n from '../../i18n/index';


const MessageBox = Vue.extend(dialog)
let instance = null
dialog.show = () => {
    if (!instance) {
        instance = new MessageBox({ i18n }).$mount()
        document.getElementById('app').appendChild(instance.$el);
    }
    instance.show = true
},
    dialog.hide = () => {
        if (instance) {
            instance.show = false
        }
    }

export default dialog