import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


const MenuLink = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" }
];

const Footer = () => {
  return (
 <div className="py-5">
  <div className='text-center'>
    <h1 className="p-3 fs-2 text-danger fw-bold brand m-5">Ecommerce</h1>
  </div>

  <div className="d-flex justify-content-between align-items-start mx-auto" style={{ width: '80%' }}>
    
    <div className="d-flex flex-column align-items-center gap-3">
      <div className="text-center">
        <h5 className="fw-bold mb-1">Important Links</h5>
        <ul className="navbar-nav mb-2 mb-lg-0">
          {MenuLink.map((item) => (
            <li key={item.id} className="nav-item">
              <a className="nav-link" href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="d-flex flex-column align-items-center gap-3">
      <div className="text-center">
        <h5 className="fw-bold mb-1">Quick Links</h5>
        <ul className="navbar-nav mb-2 mb-lg-0">
          {MenuLink.map((item) => (
            <li key={item.id} className="nav-item">
              <a className="nav-link" href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

<div className="d-flex flex-column align-items-center gap-3 text-center">
  <h5 className="fw-bold mb-1">
    Address
  </h5>
  <p className="text-secondary mb-0">
        <i className="bi bi-geo-alt-fill me-2"></i>

    Noida, Uttar Pradesh
  </p>

  {/* رقم التليفون مع أيقونة */}
  <p className="text-secondary mb-0">
    <i className="bi bi-telephone-fill me-2"></i>
    +91 1234567890
  </p>

  {/* أيقونات التواصل الاجتماعي */}
  <div className="d-flex gap-3 mt-2">
    <a href="#" className="text-secondary icon fs-4"><i className="bi bi-instagram"></i></a>
    <a href="#" className="text-secondary icon fs-4"><i className="bi bi-facebook"></i></a>
    <a href="#" className="text-secondary icon fs-4"><i className="bi bi-linkedin"></i></a>
  </div>
</div>


  </div>
</div>

  )
}

export default Footer
