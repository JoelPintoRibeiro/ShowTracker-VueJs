import Vue from 'vue'
import Vuex from 'vuex';
import showsModule from '@/store/modules/shows/index';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        showsModule
    }
});