'use client';
import { FC } from 'react';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src';
import dynamic from 'next/dynamic';
import { Product, Sale } from './types';

// Dynamically import HighchartsReact
const DynamicHighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false });

type DemoChartProps = {
    sales: Sale[];
};

const DemoChart: FC<DemoChartProps> = ({ sales }) => {
    const retailSales = sales.map((e: Sale) => [new Date(e.weekEnding).getTime(), e.retailSales]);
    const _retailSales = retailSales.map(e => [e[0], e[1] - 700000]);


    const highchartOptions = {
        chart: { type: 'spline' },
        title: { text: '' },
        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value:%b}',
                style: { color: 'lightgray', textTransform: 'uppercase' }
            },
            lineWidth: .1,
            tickWidth: 0,
        },
        yAxis: {
            min: -2000000,
            labels: { enabled: false },
            gridLineWidth: 0,
            title: { text: '' }
        },
        legend: { enabled: false },
        series: [
            {
                data: retailSales,
                marker: { enabled: false },
                color: "#41A6F6",
                lineWidth: 3
            },
            {
                data: _retailSales,
                color: "#98A4BD",
                marker: { enabled: false },
                lineWidth: 3
            }
        ],
        credits: { enabled: false }
    };
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 style={{ padding: "1rem" }}>Retail Sales</h3>
            <DynamicHighchartsReact highcharts={Highcharts} options={highchartOptions} />
        </div>
    )
}

export default DemoChart