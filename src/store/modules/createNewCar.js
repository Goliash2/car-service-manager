import axios from "axios";

export default {
    state() {
        return {
            createdCar: []
        }
    },
    mutations: {
        SET_NEW_CAR(state, createdCar) {
            state.createdCar = createdCar
        }
    },
    actions: {
        async CREATE_NEW_CAR(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post('https://csm.fd.cvut.cz/cars', payload.car,{
                    headers: { 'Authorization': 'Bearer ' + payload.token }
                })
                    .then(response => {
                        resolve(
                            response,
                            context.commit('SET_NEW_CAR', response.data)
                        )
                    })
                    .catch(err => {
                        if (err.response) {
                            reject(
                                err,
                                console.log(err)
                            )
                        }
                    })
            })
        }
    },
    getters: {
        createdCar(state) {
            return state.createdCar;
        }
    }
}