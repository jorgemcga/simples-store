import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPage from "./pages/products";
import CartPage from "./pages/cart";

const Routes: FunctionComponent = () =>
    <Router>
        <Switch>
            <Route exact path="/cart" component={CartPage} />
            <Route path="/" component={ProductPage} />
        </Switch>
    </Router>

export default Routes;