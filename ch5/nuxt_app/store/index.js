import Vuex from 'vuex'

//アロー関数を使ったストア作成
const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return {
                message: 'count number',
                counter: 0
            };
        },
        // 第一引数ではstateが渡されるので外せない
        mutations: {
            count: function(state, obj) {
                // state.counter += n; //state内のcounterを++
                state.message = obj.message;
                state.counter += obj.add;
            },
            reset: function(state) {
                state.counter = 0; //state内のcounterをリセット
            }
        }
    })
}

export default createStore;