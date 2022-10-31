import axiosConfig from '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    isAuthenticated: false,
    portalOrders: {},
  },
  getters: {
  },
  mutations: {
    setAdmin(state) {
      state.isAuthenticated = true;
    },
    setPortalOrders(state, data) {
      state.portalOrders = data;
    }
  },
  actions: {
    getPortalOrders(ctx, data) {
      console.log(ctx, "ctx", data);
      axiosConfig.get(`portal-orders/?status=${data.status}&page=${data.page}&perPage=${data.perPage}`).then(res => {
        console.log(res.data);
        ctx.commit('setPortalOrders', res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
