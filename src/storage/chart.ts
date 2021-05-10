import IProduct from "../types/product";

const CartStorage = {
    get: () => JSON.parse(localStorage.getItem('cart-products') || "[]") as IProduct[],
    set: (product: IProduct[]) => localStorage.setItem('cart-products', JSON.stringify(product))
};

export default CartStorage;