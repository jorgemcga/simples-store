import { Button, Modal } from "react-bootstrap";
import '../style.scss';

interface IProps
{
    show: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    text?: string;
}

export default function ModalConfirm(props: IProps)
{
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.text || "Tem certeza?"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-right buttons">
                    <Button variant="success" onClick={props.onConfirm}>
                        Sim
                    </Button>
                    <Button variant="secondary" onClick={props.onCancel}>
                        Não
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}