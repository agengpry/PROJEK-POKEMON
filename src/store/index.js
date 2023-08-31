import { createStore } from 'vuex';
import product from './modules/product';

const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    product,
  },
});

export default store;