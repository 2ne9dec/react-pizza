import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, Pizza, PizzaLoading } from '../components';
import { fetchPizzas, setCategory, setSortBy, addPizzaToCart } from '../redux/actions/actions';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handlerAddPizza = React.useCallback((obj) => {
    dispatch(addPizzaToCart(obj));
  }, []);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortNames}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? items.map((obj) => (
              <Pizza
                onClickAddPizza={handlerAddPizza}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill('')
              .map((_, index) => <PizzaLoading key={index} />)}
      </div>
    </div>
  );
}

export default Home;
