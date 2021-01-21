import "./App.css";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { connect } from "react-redux";
import ViewCart from "./components/ViewCart";
// import "./App.css";
const styles = {
  headerLogo: { paddingRight: "10px" },
  header: {
    padding: ".75rem 1.25rem",
    marginBottom: 0,
    backgroundColor: "forestgreen",
    borderBottom: "1px solid rgba(0,0,0,.125)",
    color: "#f8f9fa",
  },
};
function App(props) {
  const [open, setopen] = useState(false);

  return (
    <div>
      <div style={styles.header}>
        <i
          className="fa fa-shopping-cart"
          aria-hidden="true"
          style={styles.headerLogo}
        ></i>
        Cart-Web
        <span
          className="btn btn-outline-info btn-sm pull-right"
          onClick={() => setopen(true)}
        >
          View Cart
        </span>
        <div className="clearfix"></div>
      </div>
      <div className="App">
        <ProductList />
        <ViewCart open={open} setOpen={setopen} cart={props.cart} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps, {})(App);
