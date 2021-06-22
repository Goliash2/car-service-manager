import { createStore } from 'vuex';

import serviceList from '@/store/modules/serviceList'
import carList from "@/store/modules/carList";
import userAuthentication from "@/store/modules/userAuthentication";

import createPersistedState from "vuex-persistedstate";

const savedStoreToLocalMemory = createPersistedState({
    paths: ['userAuthentication']
})

const store = createStore({
    modules: {
        serviceList,
        carList,
        userAuthentication
    },
    plugins: [savedStoreToLocalMemory]
});

export default store;