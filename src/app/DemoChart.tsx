'use client';
import data from './data.json';
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function DemoChart() {
    const retailSales = data[0].sales.map(i => [new Date(i.weekEnding).getTime(), i.retailSales])
    const _retailSales = retailSales.map(e => [e[0], e[1] - 700000])
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
            <HighchartsReact highcharts={Highcharts} options={highchartOptions} />
        </div>
    )
}