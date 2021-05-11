import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.scss';

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
                    <div className="text-success">
                        Item Adicionado!
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Você pode adicionar mais ou produtos ou ver seu <Link to="/cart">carrinho</Link>
                </p>
                <br />
                <div className="text-right">
                    <Button variant="success" onClick={props.setShow}>
                        Fechar
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}