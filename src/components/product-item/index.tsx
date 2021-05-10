import React from "react";
import { Button, Card } from "react-bootstrap";
import AppContext from "../../contexts/AppContext";
import CartStorage from "../../storage/chart";
import IProduct from "../../types/product";
import { Currency } from "../../util";
import ModalProductAdded from "../modal/modal-product-added";
import './style.scss';

interface IProps
{
    type: "add" | "remove";
    product: IProduct;
}

export default function ProductItem(props: IProps)
{
    const {
        selectedProducts,
        setSelectedProducts
    } = React.useContext(AppContext);

    const [ showAdded, setShowAdded ] = React.useState(false);

    const { type, product } = props;

    const addProduct = () =>
    {
        const productIndex = selectedProducts.findIndex(_product => _product.id == product.id);

        if (productIndex >= 0)
        {
            selectedProducts[productIndex].amount = selectedProducts[productIndex].amount + 1;
            setSelectedProducts([ ...selectedProducts ]);
            CartStorage.set([ ...selectedProducts ]);
        }
        else
        {
            props.product.amount = 1;
            setSelectedProducts([ ...selectedProducts, product ]);
            CartStorage.set([ ...selectedProducts, product ]);
        }

        setShowAdded(true);
    }

    const removeProduct = () =>
    {
        const products = selectedProducts.filter(_product => _product.id != product.id)
        setSelectedProducts([ ...products ]);
    }

    return (
        <>
            <Card className="ui-product-item">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>
                        {product.name}
                    </Card.Title>
                    <Card.Text>
                        {Currency.toBr(product.price)}
                        {
                            type == "remove" &&
                                <p>
                                    Quantidade: {props.product.amount}
                                </p>
                        }
                    </Card.Text>
                    {
                        type == "add" ?
                            <Button variant="primary" onClick={addProduct}>
                                Adicionar
                            </Button> :
                            <Button variant="primary" onClick={removeProduct}>
                                Remover
                            </Button>
                    }
                </Card.Body>
            </Card>
            <ModalProductAdded
                show={showAdded}
                setShow={() => setShowAdded(false)}
            />
        </>
    )
}