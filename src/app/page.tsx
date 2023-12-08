"use client"
import { FC, useState, useEffect } from 'react';
import ProductDashboard from './ProductDashboard';
import { Provider } from 'react-redux';
import store from './store';

const Home: FC = () => {


  return (<Provider store={store}>
    <ProductDashboard />
  </Provider>
  )
}



export default Home