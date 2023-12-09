type Review = {
    customer: string;
    review: string;
    score: number;
};

type Sale = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

type Product = {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: Sale[]
};

interface TagProps {
    item: string;
}

export type { Product, TagProps, Sale, Review };