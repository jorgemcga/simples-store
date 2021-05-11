import React from "react";
import { Button, Card } from "react-bootstrap";
import AppContext from "../../contexts/AppContext";
import CartStorage from "../../storage/chart";
import IProduct from "../../types/product";
import { Currency } from "../../util";
import ModalProductAdded from "../modal/modal-product-added";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
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
                        <b>{Currency.toBr(product.price)}</b>
                        {
                            type == "remove" &&
                                <p>
                                    <b>Quantidade: {props.product.amount}</b>
                                </p>
                        }
                    </Card.Text>
                </Card.Body>
                <div
                    className="ui-product-item-action"
                    onClick={type == "add" ? addProduct : removeProduct}
                >
                    {
                        type == "add"
                            ? <FontAwesomeIcon color="#7aa93c" icon={faPlus} /> 
                            : <FontAwesomeIcon color="#d14141" icon={faTrash} /> 
                    }
                </div>
            </Card>
            <ModalProductAdded
                show={showAdded}
                setShow={() => setShowAdded(false)}
            />
        </>
    )
}