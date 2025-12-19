import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import macbook from '/Imgs/macbook-MZGIbM5F.png';
import smartwatch from '/Imgs/watch-XuWGGfaq.png';
import earphone from '/Imgs/earphone-gTSt01f7.png';
import game from '/Imgs/gaming--Uk6eZy1.png';
import vr from '/Imgs/vr-4ibBMPK9.png';
import speaker from '/Imgs/speaker-X9yW-39F.png';

const Category = [
  { id: 1, img: macbook, title: "Laptops" },
  { id: 2, img: smartwatch, title: "Gadget" },
  { id: 3, img: earphone, title: "Earphone" },
  { id: 4, img: game, title: "Games" },
  { id: 5, img: vr, title: "Oculus" },
  { id: 6, img: speaker, title: "Speakers" }
];

const CategoryComponent = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    boxesRef.current.forEach(box => {
      if(box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container my-5">
      <div className="category-grid">
        {Category.map((item, index) => (
          <div
            key={item.id}
            ref={el => boxesRef.current[index] = el}
            className={`category-box bg-${item.id}`}
            style={{ transitionDelay: `${index * 0.1}s` }} // يظهر كل واحد بعد التاني
          >
            <div className="category-left">
              <span className="small">Enjoy</span>
              <h5>With</h5>
              <h2>{item.title}</h2>
              <button className="browse-btn">Browse</button>
            </div>
            <div className="category-right">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
