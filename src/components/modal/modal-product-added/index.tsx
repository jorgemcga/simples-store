import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

interface IProps
{
    show: boolean;
    setShow: () => void;
}

export default function ModalProductAdded(props: IProps)
{
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Item Adicionado!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Você pode adicionar mais ou produtos ou ver seu <Link to="/cart">carrinho</Link>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.setShow}>
                    Fechar
                </Button>
          </Modal.Footer>
        </Modal>
    );
}