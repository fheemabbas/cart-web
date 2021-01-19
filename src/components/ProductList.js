import React from "react";
import { connect } from "react-redux";
import { fatchPost } from "../actions/index";
import { productListData } from "./productListData";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fatchPost();
  }
  render() {
    console.log("productListData :", productListData);
    return <div>PostList</div>;
  }
}
export default connect(null, { fatchPost })(ProductList);
