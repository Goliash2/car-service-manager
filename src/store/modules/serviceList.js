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
      GET_SERVICE_LIST(context, token) {
          axios.get('https://csm.fd.cvut.cz/services', {
              headers: { 'Authorization': 'Bearer ' + token }
          })
              .then(res => {
                  context.commit('SET_SERVICE_LIST', res.data)
              })
              .catch(err => {
                  console.log(err)
              })
      }
    },
    getters: {
        services(state) {
            return state.services;
        }
    }
}