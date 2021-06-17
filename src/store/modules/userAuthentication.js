import axios from 'axios';

export default {
    state() {
        return {
            userIsAuthenticated: false
        }
    },
    mutations: {
        authenticateUser(state, logged) {
            state.userIsAuthenticated = logged
        }
    },
    actions: {
        async userLogin(context, userCredentials) {
            return new Promise((resolve, reject) => {
                axios.post('https://csm.fd.cvut.cz/auth/local', {
                    identifier: userCredentials.username,
                    password: userCredentials.password
                })
                    .then(response => {
                        resolve(
                            response.status,
                            context.commit('authenticateUser', true)
                        )
                    })
                    .catch(err => {
                        if (err.response) {
                            reject('Bad Login')
                        }
                    })
                })

        }
    },
    getters: {
        isUserAuthenticated(state) {
            return state.userIsAuthenticated;
        }
    }
}