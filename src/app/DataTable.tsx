import { useEffect, useMemo, useState } from 'react';
import data from './data.json';
import { ArrowIcon } from './ArrowIcon';


type SalesData = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
};

type FieldName = "weekEnding" | "retailSales" | "wholesaleSales" | "unitsSold" | "retailerMargin";
type DisplayName = "Week Ending" | "Retail Sales" | "Wholesale Sales" | "Units Sold" | "Retailer Margin";

type FieldNames = {
    [K in DisplayName]: FieldName;
};

type Sort = {
    field: FieldName | null;
    direction: 'asc' | 'desc' | null;
};

const DISPLAY_NAMES: DisplayName[] = ["Week Ending", "Retail Sales", "Wholesale Sales", "Units Sold", "Retailer Margin"];

export default function Home() {
    const [sort, setSort] = useState<Sort>({ field: null, direction: null });
    // const [salesData] = useState(data[0].sales);
    // const [sort, setSort] = useState<Sort>({ field: null, direction: null });
    const [salesData, setSalesData] = useState<SalesData[]>([]); // replace SalesData[] with the actual type of your data

    useEffect(() => {
        setSalesData(data[0].sales);
        // Fetch data from API or props and update salesData state
    }, []);

    const displayNames = DISPLAY_NAMES;

    const fieldNames = useMemo<FieldNames>(() => ({
        "Week Ending": "weekEnding",
        "Retail Sales": "retailSales",
        "Wholesale Sales": "wholesaleSales",
        "Units Sold": "unitsSold",
        "Retailer Margin": "retailerMargin"
    }), []);

    const handleSort = (displayName: DisplayName) => {
        const field = fieldNames[displayName];
        let direction: "asc" | "desc" | null = sort.field === field ? (sort.direction === 'asc' ? 'desc' : 'asc') : 'asc';
        setSort({ field, direction });
    };

    const sortedData = [...salesData].sort((a, b) => {
        if (sort.field) {
            const field: FieldName = sort.field;
            if (a[field] < b[field]) {
                return sort.direction === 'asc' ? -1 : 1;
            }
            if (a[field] > b[field]) {
                return sort.direction === 'asc' ? 1 : -1;
            }
        }
        return 0;
    });

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {displayNames.map((item: DisplayName, index) =>
                                <th key={index} scope="col" className="px-3 py-3 font-light tracking-wider hover:cursor-pointer" onClick={() => handleSort(item)}>
                                    <div className='flex justify-center'>
                                        {item}
                                        <div className='ml-2'>
                                            <ArrowIcon direction={sort.field === fieldNames[item] ? (sort.direction === 'asc' ? 'down' : 'up') : 'down'} />
                                        </div>
                                    </div>
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((item, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {Object.keys(fieldNames).map((key, index) =>
                                <td key={index} className="px-6 py-4">
                                    {item[fieldNames[key as DisplayName]]}
                                </td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
