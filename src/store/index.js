import { createStore } from 'vuex';

import carDatabase from '@/store/modules/carDatabase'

import createPersistedState from "vuex-persistedstate";

const savedStoreToLocalMemory = createPersistedState({
    paths: []
})

const store = createStore({
    modules: {
        carDatabase
    },
    plugins: [savedStoreToLocalMemory]
});

export default store;