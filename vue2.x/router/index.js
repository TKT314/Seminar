import Vue from 'vue';
import VueRoter from 'vue-router';

Vue.use(VueRoter);

import tab from '../src/components/tab.vue';
import zhihu from '../src/components/zhihu.vue';

import componentsDemo from '../src/components/demo/components.vue';
import transitionsDemo from '../src/components/demo/transitions.vue';
import axiosUse from '../src/components/demo/axios-use.vue';
import render from '../src/components/demo/render.vue';

export default new VueRoter({
    // mode: 'history',
    routes: [
        
        {path:'/',redirect:'/tab'},
        {path:'/tab',component:tab}, 
        {path:'/components',component:componentsDemo},
        {path:'/transitions',component:transitionsDemo},
        {path:'/axios-use',component:axiosUse},
        {path:'/render',component:render},
        {path:'/zhihu',component:zhihu}
    ]
})