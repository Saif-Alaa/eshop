import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '/Imgs/headphone-M8ndZJ0u.png';
import img2 from '/Imgs/vr-4ibBMPK9.png';
import img3 from '/Imgs/macbook-MZGIbM5F.png';

const slides = [
  {
    id: 1,
    img: img1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphones",
    description: "The tree dances under sky while river sings soft music, clouds float above mountains, fire warms stones, and birds fly high."
  },
  {
    id: 2,
    img: img2,
    subtitle: "Beats Solo",
    title: "Winter Sale",
    title2: "VIRTUAL",
    description: "The tree dances under sky while river sings soft music, clouds float above mountains, fire warms stones, and birds fly high."
  },
  {
    id: 3,
    img: img3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "LAPTOPS",
    description: "The tree dances under sky while river sings soft music, clouds float above mountains, fire warms stones, and birds fly high."
  }
];
function Hero() {
  return (
<div 
  className="d-flex justify-content-center wrapper mx-auto" 
>
          <div style={{ width: '85%' }}>
        <div 
          id="carouselExampleIndicators" 
          className="carousel slide" 
          data-bs-ride="carousel" 
          data-bs-interval="4000" 
          data-bs-pause="hover"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div 
                  className="d-flex justify-content-between align-items-center"
                  style={{ minHeight: '400px' }}
                >
            
                  <div style={{ maxWidth: '50%' }}>
                    <h5 className='subtitle'> {slide.subtitle}</h5>
                    <h2 className='title'>{slide.title} </h2>
                    <h2 className='title2'>{slide.title2}</h2>
                    <button className="btn btn-danger" style={{ width: '160px' }}>Shop By Category</button>
                  </div>

               
                  <img
                    src={slide.img}
                    alt={slide.title}
                    style={{ width: '35%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;