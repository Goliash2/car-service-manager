import axios from "axios";

export default {
    state() {
        return {
            foundCustomers: []
        }
    },
    mutations: {
        SET_FOUND_CUSTOMER(state, foundCustomer) {
            state.foundCustomers = foundCustomer
        }
    },
    actions: {
        async FIND_CUSTOMER(context, payload) {
            return new Promise((resolve, reject) => {
                axios.get('https://csm.fd.cvut.cz/drivers/?_where[_or][0][name_contains]='+payload.record+'&_where[_or][1][surname_contains]='+payload.record, {
                    headers: { 'Authorization': 'Bearer ' + payload.token }
                })
                    .then(response => {
                        resolve(
                            response,
                            context.commit('SET_FOUND_CUSTOMER', response.data)
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
        foundCustomers(state) {
            return state.foundCustomers;
        }
    }
}