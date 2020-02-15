import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
//アロー関数を使ったストア作成
const createStore = () => {
    return new Vuex.Store({
        state: function() {
            return {
                message: 'count number',
                counter: 0
            };
        },
        // 第一引数ではstateが渡されるので外せない
        // mutations: {
        //     count: function(state, n) {
        //         state.counter += n;
        //     },
        //     say: function(state, msg) {
        //         state.message = msg;
        //     },
        //     reset: function(state) {
        //         state.counter = 0; //state内のcounterをリセット
        //         state.message = 'reset now...'
        //     }
        // },
        mutations: {
            doit: function(context) {
                var n = Math.floor(Math.random()*10);
                context.commit('count', n);
                context.commit('say', 'add ' + n + '!');
            },
            reset: function(state) {
                state.counter = 0; //state内のcounterをリセット
                state.message = 'reset now...'
            }
        },
        plugins: [
            createPersistedState()
        ],
    })
}

export default createStore;