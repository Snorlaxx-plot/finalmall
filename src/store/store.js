import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        currentType: 'pop',
        HomecurrentIndex: 0
    },
    mutations: {
        typeChange(state, index) {

            switch (index) {
                case 0:
                    state.currentType = "pop";
                    break;
                case 1:
                    state.currentType = "new";
                    break;
                case 2:
                    state.currentType = "sell";
                    break;
            }
        }
    },
    actions: {

    }
})
export default store