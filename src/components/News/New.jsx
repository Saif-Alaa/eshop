import React, { useEffect, useRef } from 'react'
import img1 from '/Imgs/blog-1-5Dxe4tom.jpg'
import img2 from '/Imgs/blog-2-zkQv0kmP.jpg'
import img3 from '/Imgs/blog-3-VPuh2Z20.jpg'

const news = [
  { id:1, img: img1, title: 'How to choose perfect smartwatch', desc:'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?' },
  { id:2, img: img2, title: 'How to choose perfect gadget', desc:'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?' },
  { id:3, img: img3, title:'How to choose perfect VR headset', desc :'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?' }
]

const New = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.9 }
    )

    cardsRef.current.forEach(card => {
      if(card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='container py-5'>
      <div className='text-center mb-5'>
         <h1>Recent News</h1>
         <p>Explore Our Blogs</p>
      </div>

      <div className="row g-4">
{news.map((item, index) => {
  let directionClass = index === 0 ? 'from-left' : index === 1 ? 'from-bottom' : 'from-right';
  return (
    <div key={item.id} className="col-lg-4 col-md-6 col-12">
      <div
        ref={el => cardsRef.current[index] = el}
        className={`card h-100 shadow-sm new-card ${directionClass}`}
      >
        <div className="overflow-hidden" style={{height: '250px'}}>
          <img src={item.img} alt={item.title} className="w-100 img-new h-100" style={{objectFit: 'cover'}} />
        </div>
        <div className="p-3 new-p">
          <h5 className="mt-2">{item.title}</h5>
          <p className="text-secondary">{item.desc}</p>
        </div>
      </div>
    </div>
  )
})}

      </div>
    </div>
  )
}

export default New
