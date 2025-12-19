import React, { useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import img1 from '/Imgs/p-9-o2p2J7tc.jpg'
import img2 from '/Imgs/p-7-Hx9DVjif.jpg'
import img3 from '/Imgs/p-5-ExhDW6Bq.jpg'
import img4 from '/Imgs/p-2-WFmhXsBS.jpg'
import img5 from '/Imgs/p-1-orOZMLhL.jpg'

const product = [
  { id: 1, img: img1, name: 'HeadPhone', price: 90 },
  { id: 2, img: img2, name: 'HeadPhone', price: 80 },
  { id: 3, img: img3, name: 'HeadPhone', price: 60 },
  { id: 4, img: img4, name: 'Smart Watch', price: 80 },
  { id: 5, img: img5, name: 'HeadPhone', price: 150 },
  { id: 6, img: img1, name: 'Smart Watch', price: 100 }
]

const Products = () => {

  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container text-center">
      <div className="text-center m-5">
        <h1 className="fw-bold">Best Seller Products</h1>
      </div>

      <div className="row">
        {product.map((item, index) => (
          <div key={item.id} className="col-lg-4 col-md-6 col-12">
            <div
              className="pro-card"
              ref={el => (cardsRef.current[index] = el)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="pro-img-wrapper">
                <img src={item.img} alt={item.name} className="pro-img" />
                <button className="btn btn-danger add-btn">
                  Add To Cart
                </button>
              </div>

              <h5 className="mt-3">{item.name}</h5>
              <p className="fw-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
