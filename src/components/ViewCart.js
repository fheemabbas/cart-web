import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { AddCart, RemoveCart } from "../actions/index";
import { connect } from "react-redux";
import Product from "./Product";

const ViewCart = (props) => {
  const { open, setOpen, cart } = props;
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
    >
      <Modal.Header>Your Cart</Modal.Header>

      {cart && cart.length <= 0 ? (
        <div style={styles.noDataContainer}>
          Please add something to make order.....
        </div>
      ) : (
        <Modal.Content scrolling>
          <div style={styles.contentContainer}>
            {cart &&
              cart.map((u, i) => {
                return (
                  <div className="container py-3" style={{ padding: "10px" }}>
                    <div className="card">
                      <div className="row ">
                        <div
                          className="col-md-4"
                          style={{
                            height: "100px",
                            width: "250px",
                            margin: "0 auto",
                          }}
                        >
                          <img
                            src={u.filename}
                            className="w-100"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                        <div className="col-md-8 px-3">
                          <div className="card-block px-3">
                            <h4 className="card-title">{u.title}</h4>
                            <h4 className="card-title">
                              <i className="fa fa-inr" style={styles.itemPrice}>
                                {"  "}
                                {u.price}
                              </i>
                            </h4>
                            <div>
                              <button>-</button>
                              <span
                                style={{ fontSize: "18px", margin: "0px 5px" }}
                              >
                                {u.quntity}
                              </span>
                              <button
                                onClick={() => {
                                  u.quntity += 1;
                                  props.AddCart(u);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </Modal.Content>
      )}

      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Place Order"
          labelPosition="right"
          icon="checkmark"
          onClick={async () => {
            setOpen(false);
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => {};
export default connect(mapStateToProps, { AddCart, RemoveCart })(ViewCart);
const styles = {
  contentContainer: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  noDataContainer: {
    padding: "20px",
  },
};
