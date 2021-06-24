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
        },
        CLEAR_CAR_BY_ID_STATE(state) {
            state.car = []
        }
    },
    actions: {
        async GET_CAR_BY_ID(context, payload) {
            return new Promise((resolve, reject) => {
                axios.get('https://csm.fd.cvut.cz/cars/'+payload.id, {
                    headers: { 'Authorization': 'Bearer ' + payload.token }
                })
                    .then(response => {
                        resolve(
                            response.status,
                            context.commit('SET_CAR_BY_ID', response.data)
                        )
                    })
                    .catch(err => {
                        if (err.response) {
                            reject(console.log(err))
                        }
                    })
            })
        }
    },
    getters: {
        car(state) {
            return state.car;
        }
    }
}