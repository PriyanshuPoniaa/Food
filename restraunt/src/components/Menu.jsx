import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Our popular dishes are crafted to tantalize your taste buds and make every bite unforgettable. From the creamy indulgence of butter chicken paired with fresh naan to the spicy kick of perfectly marinated tandoori kebabs, each dish is a celebration of flavor. Don't miss the fragrant biryani, layered with aromatic spices, or the rich and velvety paneer tikka for the ultimate culinary experience. A taste of perfection awaits!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
