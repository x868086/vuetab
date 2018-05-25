// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

Vue.config.productionTip = false

import './css/index.css';
import tab from './components/tab.vue';

/* eslint-disable no-new */

new Vue({
  el: '#app',
  // data:{
  //   tabTitle:tabTitle,
  //   contTitle:contTitle,
  //   curIndex:0
  // },
  // created:function(){

  // },
  // methods:{
  //   changeIndex:function(index){
  //     this.curIndex=index;
  //   }
  // }
   components: {
    tab:tab
  }
})
