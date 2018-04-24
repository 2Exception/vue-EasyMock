import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    userData:{
      id: '1002',
      info: {
        userName: 'Vue全家桶',
        group: 'vip',
      },
      follow: [
        {title: 'vuex'},
        {title: 'vue-router'},
        {title: 'vue-lazyload'}
      ],
      share: [
        {title: 'vuex1'},
        {title: 'vue-router2'},
        {title: 'vue-lazyload3'}
      ]


    }
  }

})

export default store;
