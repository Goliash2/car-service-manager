import axios from "axios";

export default {
    state() {
        return {
            foundCarsByValue: []
        }
    },
    mutations: {
        SET_FOUND_CAR_BY_VALUES(state, foundCar) {
            state.foundCarsByValue = foundCar
        }
    },
    actions: {
        async FIND_CAR_BY_VALUES(context, payload) {
            return new Promise((resolve, reject) => {
                axios.get('https://csm.fd.cvut.cz/cars/?_where['+payload.data+'_contains]='+payload.record, {
                    headers: { 'Authorization': 'Bearer ' + payload.token }
                })
                    .then(response => {
                        resolve(
                            response,
                            context.commit('SET_FOUND_CAR_BY_VALUES', response.data)
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
        foundCarsByValue(state) {
            return state.foundCarsByValue;
        }
    }
}