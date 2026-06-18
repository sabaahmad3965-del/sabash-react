import { NavLink } from 'react-router-dom'
import { chefs } from '../data/restaurantData.js'

export default function ChefeSection() {
  return (
    <div className="chefe-container">
      {chefs.map((chef) => (
        <div className="chefe-1" key={chef.id}>
          <div className="chefe-img">
            <img src={chef.img} alt="" />
          </div>
          <div className="chefe-text">
            <NavLink to="/about-us"><h3>{chef.name}</h3></NavLink>
            <p>{chef.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
