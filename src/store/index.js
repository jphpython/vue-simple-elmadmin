import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '@/api/getData'

Vue.use(Vuex);
//全局要管理的状态
const state = {
    adminInfo: {
        avatar: 'default.jpg'
    }
};
//修改state
const mutations = {
    saveAdminInfo(state, adminInfo) {
        state.adminInfo = adminInfo;
    }
};
//异步提交修改
const actions = {
    async getAdminData({commit}) {
        try {
            const res = await getAdminInfo();
            if (res.status == 1) {
                commit('saveAdminInfo', res.data);
            } else {
                throw new Error(res.type);
            }
        } catch (err) {
            console.log('actions err' + err.message);
        }
    }
};

export default new Vuex.Store({
    actions,
    mutations,
    state
});