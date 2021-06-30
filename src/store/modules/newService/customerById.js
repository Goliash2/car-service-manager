import axios from 'axios';
export default {
    state() {
        return {
            customer: []
        }
    },
    mutations: {
        SET_CUSTOMER_BY_ID(state, customer) {
            state.customer = customer
        },
        CLEAR_CUSTOMER_BY_ID_STATE(state) {
            state.customer = []
        }
    },
    actions: {
        async GET_CUSTOMER_BY_ID(context, payload) {
            return new Promise((resolve, reject) => {
                axios.get('https://csm.fd.cvut.cz/drivers/'+payload.id, {
                    headers: { 'Authorization': 'Bearer ' + payload.token }
                })
                    .then(response => {
                        resolve(
                            response.status,
                            context.commit('SET_CUSTOMER_BY_ID', response.data)
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
        customer(state) {
            return state.customer;
        }
    }
}