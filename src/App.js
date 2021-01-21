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
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  cartMain: {
    fontWeight: 600,
    position: "relative",
    top: "-5px",
    fontSize: "18px",
  },
  mainTitle: {
    fontSize: "18px",
  },
};
function App(props) {
  const [open, setopen] = useState(false);

  return (
    <>
      {/* header section */}
      <div style={styles.header}>
        <i
          className="fa fa-shopping-cart"
          aria-hidden="true"
          style={styles.headerLogo}
        ></i>
        <span style={styles.mainTitle}>Cart-Web</span>
        <span
          className="btn btn-outline-info btn-sm pull-right"
          onClick={() => setopen(true)}
          style={styles.cartMain}
        >
          View Cart
        </span>
        <div className="clearfix"></div>
      </div>

      <div className="App">
        {/* Product List Component */}
        <ProductList setopen={() => setopen(true)} />
        {/* View Cart Component */}
        <ViewCart open={open} setOpen={setopen} cart={props.cart} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps, {})(App);
