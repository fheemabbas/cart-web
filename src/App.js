import "./App.css";
import ProductList from "./components/ProductList";
import { connect } from "react-redux";
function App(props) {
  console.log("cart is :", props.cart);
  return (
    <div className="App">
      Heelo World
      <ProductList cart={props.cart} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps, {})(App);
