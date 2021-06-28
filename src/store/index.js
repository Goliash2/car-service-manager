import { createStore } from 'vuex';

import serviceList from '@/store/modules/serviceList'
import carById from "@/store/modules/carById";
import userAuthentication from "@/store/modules/userAuthentication";
import findCustomer from '@/store/modules/findCustomer';
import customerById from "@/store/modules/customerById";
import findCar from '@/store/modules/findCar'

import createPersistedState from "vuex-persistedstate";

const savedStoreToLocalMemory = createPersistedState({
    paths: ['userAuthentication']
})

const store = createStore({
    modules: {
        serviceList,
        carById,
        userAuthentication,
        findCustomer,
        customerById,
        findCar
    },
    plugins: [savedStoreToLocalMemory]
});

export default store;