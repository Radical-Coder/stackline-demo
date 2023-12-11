"use client"
import { FC, useState, useEffect } from 'react';
import DemoChart from '../components/DemoChart';
import DataTable from '../components/DataTable';
import Image from 'next/image';
import { TagProps } from '../services/types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, incrementProductIndex } from '../services/productSlice';
import { UnknownAction } from '@reduxjs/toolkit';
import { RootState } from '../services/store';

function useViewportWidth() {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return width;
}

const Tag: React.FC<TagProps> = ({ item }) => (
    <div className='m-1 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 '>
        {item}
    </div>
);

const Home: FC = () => {
    const dispatch = useDispatch();
    const { products, currentProductIndex, loading, error } = useSelector((state: RootState) => state.products);
    const product = products[currentProductIndex];
    const width = useViewportWidth();

    useEffect(() => {
        dispatch(fetchProducts() as unknown as UnknownAction);
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!product) {
        return (
            <section className="bg-white dark:bg-gray-900">
                {/* ... (your 404 page content) */}
            </section>
        );
    }

    const { image, title, subtitle, tags, sales } = product;


    return product.title ? (
        <div className={`flex flex-col w-100 sm:flex-row ml-8 mr-8 `}>
            <div className="w-full mb-8 sm:mb-0 sm:w-1/5 mr-8 bg-white sm:flex-col sm:flex rounded-lg shadow dark:bg-gray-800 ">
                {width < 640 ? (
                    <div className="flex">
                        <Image width={100} height={100} className='' src={image} alt={subtitle} />
                        <div className="flex flex-col">
                            <div onClick={() => dispatch(incrementProductIndex())} className='font-bold text-lg text-center'>{title}</div>
                            <div className='text-gray-400 text-xs text-center pb-8 '>{subtitle}</div>
                        </div>
                    </div>
                ) : (
                    <div className=''>
                        <Image width={300} height={500} className='' src={image} alt={subtitle} />
                        <div onClick={() => dispatch(incrementProductIndex())} className='font-bold text-lg text-center'>{title}</div>
                        <div className='text-gray-400 text-xs text-center pb-8 '>{subtitle}</div>
                    </div>
                )
                }

                <hr />
                <div className="flex flex-wrap ">
                    {tags && tags.map((item) =>
                        <Tag key={item} item={item} />
                    )}
                </div>
                <hr />
            </div>

            <div className='w-full sm:w-4/5 flex flex-col'>
                <div className='w-100 mb-8'>
                    {sales && <DemoChart sales={sales} />}
                </div>
                <div className='w-100 mt-8'>
                    {sales && <DataTable sales={sales} />}
                </div>
            </div>
        </div>
    ) : (

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&apos;s missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that product. </p>
                    <a href="#" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
                </div>
            </div>
        </section>
    )
}

export default Home