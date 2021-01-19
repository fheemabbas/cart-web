import React from "react";
import { connect } from "react-redux";
import { fatchPost } from "../actions/index";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fatchPost();
  }
  render() {
    console.log("in post detail :", this.props.posts);
    return <div>PostList</div>;
  }
}
export default connect(null, { fatchPost })(ProductList);
