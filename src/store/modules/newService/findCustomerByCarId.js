import axios from "axios";

export default {
    state() {
        return {
            foundCustomersByCarId: []
        }
    },
    mutations: {
        SET_FOUND_CUSTOMER_BY_CAR_ID(state, foundCustomerByCarId) {
            state.foundCustomersByCarId = foundCustomerByCarId
        }
    },
    actions: {
        async FIND_CUSTOMER_BY_CAR_ID(context, payload) {
            return new Promise((resolve, reject) => {
                axios.get('https://csm.fd.cvut.cz/drivers/?_where[services.car_eq]='+payload.carId, {
                    headers: { 'Authorization': 'Bearer ' + payload.token }
                })
                    .then(response => {
                        resolve(
                            response,
                            context.commit('SET_FOUND_CUSTOMER_BY_CAR_ID', response.data)
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
        foundCustomersByCarId(state) {
            return state.foundCustomersByCarId;
        }
    }
}