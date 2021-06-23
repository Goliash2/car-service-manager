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
        async GET_CAR_BY_ID(context, payload) {
            return new Promise((resolve, reject) => {
                axios.get('https://csm.fd.cvut.cz/cars/'+payload.id, {
                    headers: { 'Authorization': 'Bearer ' + payload.token }
                })
                    .then(response => {
                        context.commit('SET_CAR_BY_ID', response.data)
                        resolve(
                            response.status
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