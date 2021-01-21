import React from "react";
import { AddCart, RemoveCart, updateCart } from "../actions/index";
import { connect } from "react-redux";
import "../App.css";
const styles = {
  cartButton: {
    backgroundColor: "white",
    borderRadius: "50px",
    borderColor: "forestgreen",
    color: "forestgreen",
    padding: "3px 6px",
  },
  itemQuntity: { fontSize: "18px", margin: "0px 5px" },
};
const UpdateButton = (props) => {
  const { cart, quntity, id } = props;
  const UpdateQuntity = (cart, id, operation) => {
    let tempArray = [...cart];
    const existingProductIndex = cart.findIndex((x) => x.id === id);
    let product;
    product = cart[existingProductIndex];
    {
      operation === "add" ? (product.quntity += 1) : (product.quntity -= 1);
    }
    tempArray[existingProductIndex] = product;
    props.updateCart(tempArray);
  };
  return (
    <div>
      {quntity <= 1 ? (
        <button
          type="button"
          className="btn btn-primary"
          style={styles.cartButton}
          onClick={() => {
            let newArray = [...cart];
            newArray = newArray.filter((x) => {
              return x.id !== id;
            });
            props.RemoveCart(newArray);
          }}
        >
          <span class="glyphicon glyphicon-trash"></span>
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          style={styles.cartButton}
          onClick={() => {
            UpdateQuntity(cart, id, "remove");
          }}
        >
          -
        </button>
      )}
      <span style={styles.itemQuntity}>{quntity}</span>
      <button
        type="button"
        className="btn btn-primary"
        style={styles.cartButton}
        onClick={() => {
          UpdateQuntity(cart, id, "add");
        }}
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {};
export default connect(mapStateToProps, { AddCart, RemoveCart, updateCart })(
  UpdateButton
);
