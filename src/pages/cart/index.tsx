import * as React from 'react';
import { Alert, Col, Container, Row,  } from 'react-bootstrap';
import AppContext from '../../contexts/AppContext';
import ProductItem from '../../components/product-item';
import NavBar from '../../components/navbar'
import { Link } from 'react-router-dom';

export default function CartPage()
{
    const { setLoading, selectedProducts } = React.useContext(AppContext);

    setLoading(false);

    return (
        <div className="page">
            <NavBar />
            <Container fluid>
                <br />
                <Row>
                    <Col>
                        <h2>
                            Meu Carrinho
                        </h2>
                    </Col>
                </Row>
                <br />
                <Row>
                    {
                        selectedProducts.length > 0 ?
                            selectedProducts.map((product, index) =>
                                <Col key={index} xs="12" sm="12" md="3" lg="3" xl="3">
                                    <ProductItem
                                        type="remove"
                                        product={product}
                                    />
                                </Col>) :
                                <Alert>
                                    Você ainda não adicionou nenhum produto :(
                                    <br />
                                    Adicione em <Link to="/">Produtos</Link>
                                </Alert>
                    }
                </Row>
            </Container>
        </div>
    );
}