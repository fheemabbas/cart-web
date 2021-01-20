import React, { useState, useEffect } from "react";
import { AddCart, RemoveCart } from "../actions/index";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
const Product = (props) => {
  const [inCart, setinCart] = useState(false);
  // const [state, setstate] = useState(initialState)
  const { data, cart } = props;

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      if (props.cart[i].id === data.id) {
        setinCart(true);
        break;
      }
    }
  }, [props.cart]);
  const Rating = {
    size: 34,
    count: 5,
    isHalf: false,
    value: data.rating,
    color: "#efefef",
    activeColor: "#f5d04b",
    edit: false,
  };
  return (
    <>
      <div className="card" style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src={data.filename}
            className="card-img-top"
            alt="..."
            style={styles.image}
          />
        </div>
        <div className="card-body">
          <div className="card-title" style={styles.title}>
            {data.title}
          </div>

          <div className="card-text" style={styles.description}>
            {data.description}
          </div>
          <div className="card-text" style={styles.price}>
            <div>
              <i className="fa fa-inr" style={styles.itemPrice}>
                {"  "}
                {data.price}
              </i>
            </div>
          </div>
          <div className="card-text" style={styles.rating}>
            <ReactStars {...Rating} />
          </div>

          {inCart ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                let newArray = [...cart];
                newArray = newArray.filter((u) => {
                  return u.id !== data.id;
                });
                props.RemoveCart(newArray);
                setinCart(false);
              }}
            >
              Remove from cart
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                data.quntity = 1;
                props.AddCart(data);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps, { AddCart, RemoveCart })(Product);

const styles = {
  descriptionTitle: { fontWeight: "bold" },
  itemPrice: { fontSize: "16px" },
  rating: { display: "flex", justifyContent: "center" },
  imageContainer: {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "100px",
    width: "100px",
    margin: "0 auto",
  },

  image: { height: "100%", width: "100%", borderRadius: "50px" },
  title: {
    lineHeight: "1.5em",
    overflow: "hidden",
    // height: "3em",
    padding: "10px 0px",
    fontSize: "18px",
    fontWeight: 600,
  },
  description: {
    // display: "flex",
    lineHeight: "1.5em",
    overflow: "hidden",
    height: "3em",
    margin: "10px 0px ",
    fontSize: "14px",
    textAlign: "left",
  },
  price: {
    lineHeight: "1.5em",
    margin: "5px",
  },
  container: {
    marginTop: "0px",
    margin: "10px",
    width: "30rem",
    border: "1px solid #efefef",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.05)",
    padding: "20px",
    borderRadius: "5px",
  },
};
