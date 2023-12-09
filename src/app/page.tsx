"use client"
import { FC } from 'react';
import ProductDashboard from './containers/ProductDashboard';
import { Provider } from 'react-redux';
import store from './services/store';

const Home: FC = () => {
  return (<Provider store={store}>
    <ProductDashboard />
  </Provider>)
}



export default Home