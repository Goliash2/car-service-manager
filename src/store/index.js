import { createStore } from 'vuex';

import carDatabase from '@/store/modules/carDatabase'
import userAuthentication from "@/store/modules/userAuthentication";

import createPersistedState from "vuex-persistedstate";

const savedStoreToLocalMemory = createPersistedState({
    paths: []
})

const store = createStore({
    modules: {
        carDatabase,
        userAuthentication
    },
    plugins: [savedStoreToLocalMemory]
});

export default store;