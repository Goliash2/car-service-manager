import axios from 'axios';
export default {
    state() {
        return {
            car: []
        }
    },
    mutations: {
        SET_CAR_BY_ID(state, car) {
            state.car = car
        }
    },
    actions: {
        GET_CAR_BY_ID(context, payload) {
            axios.get('https://csm.fd.cvut.cz/cars/'+payload.id, {
                headers: { 'Authorization': 'Bearer ' + payload.token }
            })
                .then(res => {
                    context.commit('SET_CAR_BY_ID', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    getters: {
        car(state) {
            return state.car;
        }
    }
}