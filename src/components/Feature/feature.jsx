import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Feature() {
  return (
  <div className="py-5">
    <div className="feature-container mx-auto" style={{ width: '80%' }}>
  <div className="feature-item">
    <i className="bi bi-truck fs-1 text-danger"></i>
    <div>
      <h5 className="fw-bold mb-1">Free Shipping</h5>
      <p className="text-secondary mb-0">Free shipping on all orders</p>
    </div>
  </div>

  <div className="feature-item">
    <i className="bi bi-wallet2 fs-1 text-danger"></i>
    <div>
      <h5 className="fw-bold mb-1">Payment</h5>
      <p className="text-secondary mb-0">Secure payment system</p>
    </div>
  </div>

  <div className="feature-item">
    <i className="bi bi-headphones fs-1 text-danger"></i>
    <div>
      <h5 className="fw-bold mb-1">Support</h5>
      <p className="text-secondary mb-0">24/7 customer support</p>
    </div>
  </div>

  <div className="feature-item">
    <i className="bi bi-check-circle fs-1 text-danger"></i>
    <div>
      <h5 className="fw-bold mb-1">Completed</h5>
      <p className="text-secondary mb-0">Order completed safely</p>
    </div>
  </div>
</div>

</div>


  )
}

export default Feature;
