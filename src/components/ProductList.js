import React from "react";
import { connect } from "react-redux";
import { productListData } from "./productListData";
import Product from "./Product";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
class ProductList extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div style={styles.container}>
        {/* Rendering Product List */}
        {productListData &&
          productListData.map((u, i) => {
            return <Product data={u} key={u.id} />;
          })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {};
export default connect(mapStateToProps, {})(ProductList);
