"use client"
import ProductDashboard from "./containers/ProductDashboard";
import store from "./services/store";
import { Provider } from "react-redux";


export default function Page() {
    return (
        <Provider store={store}>
            <ProductDashboard />
        </Provider>
    )
}