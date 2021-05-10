import React from "react";
import Loading from "./components/loading";
import AppContext from './contexts/AppContext';
import CartStorage from './storage/chart';

export default function App(props: any)
{
    const [ loading, setLoading ] = React.useState(true);
    const [ selectedProducts, setSelectedProducts ] = React.useState(CartStorage.get());

    const defaultValues = {
        loading,
        setLoading,
        selectedProducts,
        setSelectedProducts
    };

    return (
        <AppContext.Provider value={defaultValues}>
            {props.children}
            <Loading show={loading} />
        </AppContext.Provider>
    );
}