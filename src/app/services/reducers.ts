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

interface ProductState {
    products: Product[];
    currentProductIndex: number;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    currentProductIndex: 0,
    loading: false,
    error: null,
};

type ProductAction =
    | { type: 'LOAD_PRODUCTS_START' }
    | { type: 'LOAD_PRODUCTS_SUCCESS'; payload: Product[] }
    | { type: 'LOAD_PRODUCTS_FAILURE'; payload: string }
    | { type: 'INCREMENT_PRODUCT_INDEX' };

const productReducer = (state: ProductState = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case 'LOAD_PRODUCTS_START':
            return { ...state, loading: true, error: null };

        case 'LOAD_PRODUCTS_SUCCESS':
            return { ...state, loading: false, products: action.payload };

        case 'LOAD_PRODUCTS_FAILURE':
            return { ...state, loading: false, error: action.payload };

        case 'INCREMENT_PRODUCT_INDEX':
            return { ...state, currentProductIndex: state.currentProductIndex + 1 };

        default:
            return state;
    }
};

export default productReducer;
