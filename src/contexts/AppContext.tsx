import { createContext } from "react";
import IProduct from '../types/product';

interface IAppData
{
    loading: boolean;
    setLoading: (loading: boolean) => void;

    selectedProducts: IProduct[],
    setSelectedProducts: (products: IProduct[]) => void;
}

const AppContext = createContext<IAppData>({} as IAppData);

export default AppContext;