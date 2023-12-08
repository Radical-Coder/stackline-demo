'use client';
import DemoChart from './DemoChart'
import DataTable from './DataTable'
import data from './data.json';
import Image from 'next/image';

const Tag = ({ item }: { item: string }) => (
  <div className='m-1 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 '>
    {item}
  </div>
);


export default function Home() {
  let product = data[0]

  if (!product) {
    return <div>No product found</div>;
  }

  const { image, title, subtitle, tags } = product;

  return (
    <div className="flex bg-gray-100 ml-8 mr-8">

      <div className="w-1/5 mr-8 bg-white rounded-lg shadow dark:bg-gray-800 ">
        <Image width={300} height={500} className='' src={image} alt={subtitle} />
        <div className='font-bold text-lg text-center'>{title}</div>
        <div className='text-gray-400 text-xs text-center pb-8 '>{subtitle}</div>
        <hr />
        <div className="flex flex-wrap ">
          {tags.map((item) =>
            <Tag key={item} item={item} />
          )}
        </div>
        <hr />
      </div>

      <div className='w-4/5 flex flex-col'>

        <div className='w-100 mb-8'>
          <DemoChart />
        </div>

        <div className='w-100 mt-8'>
          <DataTable />
        </div>

      </div>
    </div>
  )
}
