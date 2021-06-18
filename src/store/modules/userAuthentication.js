import axios from 'axios';
import jwt_decode from "jwt-decode";
import router from "@/router";

export default {
    state() {
        return {
            userIsAuthenticated: false,
            token: null,
            tokenExpiration: null
        }
    },
    mutations: {
        authenticateUser(state, logged) {
            state.userIsAuthenticated = logged
        },
        storeUserToken(state, token) {
            state.token = token
        },
        storeUserTokenExpiration(state, exp) {
            state.tokenExpiration = exp
        },
        disconnectUser(state) {
            state.userIsAuthenticated = false
            state.token = null
            state.tokenExpiration = null
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
                        const responseObject = Object.values(response.data);
                        const token = responseObject[0];
                        const tokenPayload = jwt_decode(token);
                        const tokenExpiration = tokenPayload.exp;
                        resolve(
                            response.status,
                            context.commit('authenticateUser', true),
                            context.commit('storeUserToken', token),
                            context.commit('storeUserTokenExpiration', tokenExpiration)
                        )
                    })
                    .catch(err => {
                        if (err.response) {
                            reject('Bad Login')
                        }
                    })
                })

        },
        async userLogout(context) {
            context.commit('disconnectUser')
            await router.replace('/login')
        }
    },
    getters: {
        isUserAuthenticated(state) {
            return state.userIsAuthenticated;
        },
        userToken(state) {
            return state.token;
        },
        userTokenExpiration(state) {
            return state.tokenExpiration;
        }
    }
}