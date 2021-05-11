import * as React from 'react';
import { Alert, Col, Container, Form, InputGroup, Row,  } from 'react-bootstrap';
import IProduct from '../../types/product';
import AppContext from '../../contexts/AppContext';
import axios from 'axios';
import ProductItem from '../../components/product-item';
import NavBar from '../../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function ProductsPage()
{
    const { setLoading } = React.useContext(AppContext);

    const [ products, setProducts ] = React.useState([] as IProduct[])
    const [ filter, setFilter ] = React.useState("");

    const getProducts = async () =>
    {
        setLoading(true);

        const response = await axios.get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product');

        setProducts(response.data);
        setLoading(false);
    }

    React.useEffect(() => { getProducts() }, []);

    const _products = filter != ""
                        ? products.filter(p => p.name.toLocaleLowerCase().trim().includes(filter.toLowerCase().trim()))
                        : products;


    return (
        <div className="page">
            <NavBar />
            <Container fluid>
                <br />
                <InputGroup className="mb-3">
                    <Form.Control
                        className="page-search-input"
                        type="text"
                        placeholder="Pesquisar produto..."
                        onChange={e => setFilter(e.target.value)}
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                <br />
                <Row>
                    <Col>
                        <h2>
                            Nossos Produtos
                        </h2>
                    </Col>
                </Row>
                <br />
                <Row>
                    {
                        (filter != "" && _products.length == 0) ?
                            <Alert>
                                Nenhum produto encontrado :(
                            </Alert> :
                            _products.map((product, index) =>
                                <Col key={index} xs="12" sm="12" md="3" lg="3" xl="3">
                                    <ProductItem
                                        type="add"
                                        product={product}
                                    />
                                </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
}