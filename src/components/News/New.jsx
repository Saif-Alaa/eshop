import React from 'react'
import img1 from '/Imgs/blog-1-5Dxe4tom.jpg'
import img2 from '/Imgs/blog-2-zkQv0kmP.jpg'
import img3 from '/Imgs/blog-3-VPuh2Z20.jpg'

const news = [
    {
         id:1,
         img: img1, 
         title: 'How to choose perfect smartwatch',
        desc:'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?'
    },
    
        { 
            id:2,
            img: img2,
            title: 'How to choose perfect gadget',
            desc:'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?'
         },
    { 
        id:3,
        img: img3,
        title:'How to choose perfect VR headset', 
        desc :'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?' 
    }
]

const New = () => {
  return (
    <div className='container py-5'>
      <div className='text-center mb-5'>
         <h1>Recent News</h1>
         <p>Explore Our Blogs</p>
      </div>

      <div className="row g-4">
        {news.map(item => (
          <div key={item.id} className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 shadow-sm">
              
              <div className="overflow-hidden" style={{height: '250px'}}>
                <img src={item.img} alt={item.title} className="w-100 h-100" style={{objectFit: 'cover'}} />
              </div>

              <div className="p-3">
                <h5 className="mt-2">{item.title}</h5>
                <p className="text-secondary">{item.desc}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default New
