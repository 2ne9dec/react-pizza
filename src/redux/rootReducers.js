import { combineReducers } from 'redux';
import filters from './reducers/filters';
import pizzas from './reducers/pizzas';
import cart from './reducers/cart';

const rootReducers = combineReducers({
  filters,
  pizzas,
  cart,
});

export default rootReducers;
