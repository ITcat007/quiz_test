import {createStore} from 'vuex';
import axios from 'axios';

export default createStore({
    state:{
        jsonData: {}
    },
    actions:{
        async getJsonData(ctx){
            const response = await axios.get('../src/data.json');
            ctx.commit('updateJsonData', response.data)
        }
    },
    mutations:{
        updateJsonData(state, data){
            state.jsonData = data;
        }
    },
    getters:{
        jsonData(state){
            return state.jsonData;
        }
    },
})