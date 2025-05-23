import React from "react";

import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item, idx) => idx !== id);
    setCart(updatedCart);
  };

  // Calculate total price
  const getTotal = () => {
    return cart.reduce((sum, item) => {
      // Remove non-numeric chars and parse
      const price = parseInt(item.price.replace(/[^\d]/g, ""), 10);
      return sum + (isNaN(price) ? 0 : price);
    }, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center cart-title mb-4">Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty.</div>
      ) : (
        <>
          <div className="d-flex justify-content-end align-items-center mb-4">
            <button
              className="btn btn-outline-danger btn-sm ms-2 fw-bold "
              onClick={() => setCart([])}
            >
              Clear Cart
            </button>
          </div>
          <div className="row g-3 justify-content-center">
            {cart.map((item, idx) => (
              <div
                className="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch"
                key={idx}
              >
                <div className="card cart-card">
                  <div className="row g-0 h-100">
                    <div className="col-4 d-flex align-items-center justify-content-center p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded cart-product-img"
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body d-flex flex-column h-100 p-2">
                        <h6 className="card-title mb-1 text-truncate cart-product-title">
                          {item.name}
                        </h6>
                        <div className="text-success fw-bold mb-1">
                          {item.price}
                        </div>
                        <div className="text-muted small mb-2">
                          {item.category}
                        </div>
                        <button
                          className="btn btn-danger btn-sm mt-auto align-self-end"
                          onClick={() => handleRemove(idx)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total-bottom d-flex flex-column justify-content-center align-items-center mt-4 gap-3">
            <span className="fs-5 fw-bold bg-light px-3 py-2 rounded shadow-sm mb-2">
              Total: ₹{getTotal().toLocaleString()}
            </span>
            <button
              className="btn btn-primary btn-lg px-5"
              onClick={() =>
                alert("Thank you for your purchase! ")
              }
              disabled={cart.length === 0}
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
