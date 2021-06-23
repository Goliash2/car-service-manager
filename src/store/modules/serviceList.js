import axios from 'axios';
export default {
    state() {
        return {
            services: []
        }
    },
    mutations: {
        SET_SERVICE_LIST(state, services) {
            state.services = services
        }
    },
    actions: {
        async GET_SERVICE_LIST(context, token) {
          return new Promise((resolve, reject) => {
              axios.get('https://csm.fd.cvut.cz/services', {
                  headers: { 'Authorization': 'Bearer ' + token }
              })
                  .then(response => {
                      resolve(
                          response.status,
                          context.commit('SET_SERVICE_LIST', response.data)
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
        services(state) {
            return state.services;
        }
    }
}