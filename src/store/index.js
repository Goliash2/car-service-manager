import { createStore } from 'vuex';

import carDatabase from '@/store/modules/carDatabase'

const store = createStore({
    modules: {
        carDatabase
    }
});

export default store;