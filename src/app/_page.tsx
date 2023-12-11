"use client"
import { FC, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './services/store';
/*
 * This file defines the Home component. We encountered a hydration issue due to the use of the window object 
 * in the ProductDashboard component, which is not available during server-side rendering.
 *
 * To fix this, we defer the rendering of the ProductDashboard component until after the component has mounted 
 * on the client. We conditionally require the ProductDashboard component only if 'isMounted' is true, 
 * ensuring that it is only rendered on the client where the window object is available.
 */
const Home: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ProductDashboard = isMounted ? require('./containers/ProductDashboard').default : () => null;

  return (<Provider store={store}>
    <ProductDashboard />
  </Provider>)
}

export default Home