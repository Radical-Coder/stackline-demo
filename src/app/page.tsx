'use client';
import { FC } from 'react';
import DemoChart from './DemoChart';
import DataTable from './DataTable';
import data from './data.json';
import Image from 'next/image';
import { TagProps, Product, Sale } from './types';

const Tag: React.FC<TagProps> = ({ item }) => (
  <div className='m-1 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 '>
    {item}
  </div>
);

const Home: FC = () => {
  if (!data || data.length === 0) {
    return <div>Loading product data...</div>;
  }

  const product: Product = {
    ...data[0],
    // sales: generateProductSales(2021)
  };
  const { image, title, subtitle, tags, sales } = product;

  function generateProductSales(year: number): Sale[] {
    const sales: Sale[] = [];

    // Start from January 1st of the inputted year
    let date = new Date(year, 0, 1);

    // Generate data for each week of the year
    for (let i = 0; i < 52; i++) {
      // Generate random sales and units sold
      const retailSales = Math.floor(Math.random() * 1000000);
      const wholesaleSales = Math.floor(Math.random() * 1000000);
      const unitsSold = Math.floor(Math.random() * 1000);
      const retailerMargin = Math.floor(Math.random() * 200000);

      // Add the data for this week to the sales array
      sales.push({
        weekEnding: date.toISOString().split('T')[0],
        retailSales,
        wholesaleSales,
        unitsSold,
        retailerMargin
      });

      // Move to the next week
      date.setDate(date.getDate() + 7);
    }

    console.log(sales)
    return sales;
  }

  return product.title ? (
    <div className="flex bg-gray-100 ml-8 mr-8">
      <div className="w-1/5 mr-8 bg-white rounded-lg shadow dark:bg-gray-800 ">
        <Image width={300} height={500} className='' src={image} alt={subtitle} />
        <div className='font-bold text-lg text-center'>{title}</div>
        <div className='text-gray-400 text-xs text-center pb-8 '>{subtitle}</div>
        <hr />
        <div className="flex flex-wrap ">
          {tags && tags.map((item) =>
            <Tag key={item} item={item} />
          )}
        </div>
        <hr />
      </div>

      <div className='w-4/5 flex flex-col'>
        <div className='w-100 mb-8'>
          {sales && <DemoChart sales={sales} />}
          {/* <DemoChart sales={sales}/> */}
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
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that product. </p>
          <a href="#" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
        </div>
      </div>
    </section>
  )
}

export default Home