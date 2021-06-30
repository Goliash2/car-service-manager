import { createStore } from 'vuex';

import serviceList from '@/store/modules/serviceList'
import carById from "@/store/modules/newService/carById";
import userAuthentication from "@/store/modules/userAuthentication";
import findCustomer from '@/store/modules/findCustomer';
import customerById from "@/store/modules/newService/customerById";
import findCar from '@/store/modules/newService/findCar'
import newServiceLocalStorage from '@/store/modules/newService/newServiceLocalStorage'
import createNewCar from "@/store/modules/newService/createNewCar";
import findCustomerByCarId from "@/store/modules/newService/findCustomerByCarId";

import createPersistedState from "vuex-persistedstate";

const savedStoreToLocalMemory = createPersistedState({
    paths: ['userAuthentication', 'newServiceLocalStorage']
})

const store = createStore({
    modules: {
        serviceList,
        carById,
        userAuthentication,
        findCustomer,
        customerById,
        findCar,
        newServiceLocalStorage,
        createNewCar,
        findCustomerByCarId
    },
    plugins: [savedStoreToLocalMemory]
});

export default store;