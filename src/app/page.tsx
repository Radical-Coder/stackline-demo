'use client';
import DemoChart from './DemoChart'
import DataTable from './DataTable'
import data from './data.json';
import Image from 'next/image';


export default function Home() {
  let product = data[0]
  return (
    <div className="flex bg-gray-100 ml-8 mr-8">

      <div className="w-1/5 mr-8 bg-white rounded-lg shadow dark:bg-gray-800 ">
        <Image width={300} height={500} className='' src={product.image} alt="Magic Bullet NutriBullet" />
        <div className='font-bold text-lg text-center'>{product.title}</div>
        <div className='text-gray-400 text-xs text-center pb-8 '>{product.subtitle}</div>
        <hr />
        <div className="flex flex-wrap ">

          {product.tags.map((item, index) =>
            <div key={index} className='m-1 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 '>
              {item}
            </div>)}
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
