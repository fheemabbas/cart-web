import "./App.css";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { connect } from "react-redux";
import ViewCart from "./components/ViewCart";
function App(props) {
  const [open, setopen] = useState(false);
  console.log("cart is :", props.cart);
  console.log("cart is :", open);

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        <button type="button" onClick={() => setopen(true)}>
          View Cart
        </button>
      </nav>
      <ProductList cart={props.cart} />
      <ViewCart open={open} setOpen={setopen} cart={props.cart} />
    </div>
  );
}

// class App extends Component {
//   state = {
//     open: false,
//     cart: this.props.cart,
//   };
//   omponentDidUpdate(prevProps) {
//     if (prevProps.cart !== this.props.cart) {
//       this.setState({ cart: this.props.cart });
//     }
//   }
//   render() {
//     console.log("cart is :", this.state.cart);
//     console.log("cart is :", this.state.open);
//     return (
//       <div className="App">
//         <nav class="navbar navbar-light bg-light">
//           <button type="button" onClick={() => this.setState({ open: true })}>
//             View Cart
//           </button>
//         </nav>
//         <ProductList cart={this.state.cart} />
//         <ViewCart
//           open={this.state.open}
//           setOpen={() => this.setState({ open: false })}
//           cart={this.props.cart}
//         />
//       </div>
//     );
//   }
// }
const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps, {})(App);
