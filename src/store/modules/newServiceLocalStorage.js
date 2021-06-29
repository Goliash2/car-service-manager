export default {
    state() {
        return {
            kilometers: null
        }
    },
    mutations: {
        SET_KILOMETERS_TO_STATE(state, km) {
            state.kilometers = km
        },
        CLEAR_KILOMETERS(state) {
            state.kilometers = null
        }
    },
    actions: {
        SET_KILOMETERS(context, km) {
            context.commit('SET_KILOMETERS_TO_STATE', km)
        }
    },
    getters: {
        kilometers(state) {
            return state.kilometers;
        }
    }
}