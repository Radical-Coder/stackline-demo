import { Sale } from "./types";

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