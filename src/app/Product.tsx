import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementProductIndex } from './services/actions';
import store, { RootState } from './services/store';
import { fetchProducts } from './services/productSlice';
import { UnknownAction } from '@reduxjs/toolkit';

const ProductDisplay: React.FC = () => {
    const dispatch = useDispatch();
    const { products, currentProductIndex, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts() as unknown as UnknownAction);
    }, [dispatch]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const currentProduct = products[currentProductIndex];
    return (
        
            <div>
                {currentProduct && (
                    <div>
                        <h2>{currentProduct.title}</h2>
                        <p>{currentProduct.subtitle}</p>
                        <button onClick={() => dispatch(incrementProductIndex())}>Next Product</button>
                    </div>
                )}
            </div>
    );
};

export default ProductDisplay;
