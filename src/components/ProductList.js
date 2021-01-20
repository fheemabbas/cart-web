import React from "react";
import { connect } from "react-redux";
import { productListData } from "./productListData";
import Product from "./Product";

class ProductList extends React.Component {
  componentDidMount() {
    // this.props.fatchPost();
  }
  render() {
    return (
      <div style={styles.container}>
        {productListData &&
          productListData.map((u, i) => {
            return <Product data={u} key={u.id} cart={this.props.cart} />;
          })}
      </div>
    );
  }
}
export default ProductList;
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
