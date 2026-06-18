import {
  popularFoodItems,
  bestSellingDishes,
  weeklyOffers,
  menuCategories,
  menuDishes,
} from '../data/restaurantData.js'
import { NavLink } from 'react-router-dom'
import ChefeSection from '../components/ChefeSection.jsx'

export default function Home() {
  return (
    <>
      <div className="banner">
        <img src="/images/banner-home.png" alt="banner" />

        <div className="banner-text text1">
          <h6>welcome sabash</h6>
          <h1>Now open to serve you!</h1>
          <div className="text-box">
            <button style={{ marginLeft: 20, marginTop: 60 }}>
              <a style={{ color: 'white' }} href="#">ORDER NOW</a>
            </button>
          </div>
        </div>

        <div className="banner-text text2">
          <h6>welcome sabash</h6>
          <h1>Pick up and delivery only</h1>
          <div className="text-box">
            <button style={{ marginLeft: 20, marginTop: 60 }}>
              <a style={{ color: 'white' }} href="#">ORDER NOW</a>
            </button>
          </div>
        </div>
      </div>

      <div className="fresheat-section">
        <div className="style">
          <div className="style2">
            <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
            <h1 className="fresheat-text">sabash</h1>
            <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
          </div>
        </div>
      </div>

      <div className="food">
        <h2>popular food items</h2>
      </div>

      <div className="food-items">
        <div className="item">
          {popularFoodItems.map((it) => (
            <div className="item1" key={it.id}>
              <img src={it.img} alt="food-item" />
              <h3 style={{ fontSize: 25 }}>{it.name}</h3>
              <h6>$ {it.price}</h6>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="item">
          {popularFoodItems.map((it) => (
            <div className="item1" key={`dup-${it.id}`}>
              <img src={it.img} alt="food-item" />
              <h3 style={{ fontSize: 25 }}>{it.name}</h3>
              <h6>$ {it.price}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className="imgs">
        {weeklyOffers.map((offer) => (
          <div className="img-1" key={offer.id}>
            <div className="content-box">
              <div className="text-box">
                <h6>{offer.label}</h6>
                <h1>{offer.title}</h1>
                <p>limits Time Offer</p>
                <button><a style={{ color: 'white' }} href="#">ORDER NOW</a></button>
              </div>
              <img className="main-img" src={offer.img} alt="" />
              <img className="shape" src="/images/offerShape1_4.png" alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="fresheat-section">
          <div className="style">
            <div className="style2">
              <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
              <h1 className="fresheat-text">About US</h1>
              <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
            </div>
          </div>
        </div>
        <div className="food">
          <h2>Variety of flavours from american cuisine</h2>
        </div>
        <div className="text-b">
          It is a long established fact that a reader will be distracted the
          readable content of a page when looking at layout the point established
          fact that
        </div>
        <div className="text-box">
          <button><a style={{ color: 'white' }} href="#">ORDER NOW</a></button>
        </div>
      </div>

      <div className="fresheat-section">
        <div className="style">
          <div className="style2">
            <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
            <h1 className="fresheat-text">POPULAR DISHES</h1>
            <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
          </div>
        </div>
      </div>
      <div className="food">
        <h2>Best selling Dishes</h2>
      </div>

      <div className="food-itemsS">
        <div className="itemS">
          {bestSellingDishes.map((d) => (
            <div className="item1S" key={d.id}>
              <img style={d.height ? { height: d.height } : undefined} src={d.img} alt="food-item" />
              <h3 style={{ fontSize: 25, textTransform: d.capitalize ? 'capitalize' : undefined }}>
                {d.name}
              </h3>
              <div className="text-1">the registration fee</div>
              <h6 className="dollers">$ {d.price}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className="background">
        <div className="pizza">
          <img src="/images/pizza-banner.png" alt="" />
          <div className="pizza-contant">
            <h6>WELCOME SABASH</h6>
            <h3
              style={{
                marginTop: 40,
                color: '#ffffff',
                lineHeight: '35px',
                fontSize: 41,
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              TODAY SPACIAL FOOD
            </h3>
            <p
              style={{
                color: '#fc791a',
                fontSize: 24,
                fontWeight: 700,
                lineHeight: '105px',
                textTransform: 'capitalize',
              }}
            >
              limits Time Offer
            </p>
            <div className="order-button">
              <button><a style={{ color: 'white' }} href="#">ORDER NOW</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-S">
        <div className="fresheat-section">
          <div className="style">
            <div className="style2">
              <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
              <NavLink style={{ textDecoration: 'none' }} to="/menu">
                <h1 className="fresheat-text">FOOD MENU</h1>
              </NavLink>
              <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
            </div>
          </div>
        </div>
        <div className="food">
          <NavLink style={{ textDecoration: 'none', color: '#010f1c' }} to="/menu">
            <h2>sabash Foods Menu</h2>
          </NavLink>
        </div>

        <div className="menu-div">
          <ul className="menu-list">
            {menuCategories.map((cat) => (
              <li key={cat.id}>
                <NavLink className="menus1" to="/menu">
                  <img className="menu-img" src={cat.img} alt="" />
                  <div className="small-div">
                    <h6 style={{ textTransform: 'capitalize' }}>{cat.name}</h6>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="true-menu">
          {menuDishes.map((dish) => (
            <div className="menu-5star" key={dish.id}>
              <div className="menu-4s">
                <NavLink to="/menu">
                  <img height="100px" src={dish.img} alt="thumb" />
                </NavLink>
              </div>
              <div className="menu-3s">
                <NavLink to="/menu"><h3>{dish.name}</h3></NavLink>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <h6>${dish.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chefe-section">
        <div className="fresheat-section">
          <div className="style">
            <div className="style2">
              <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
              <h1 className="fresheat-text">OUR CHEFE</h1>
              <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
            </div>
          </div>
        </div>
        <div className="food">
          <h2>Meet Our Expert Chefe</h2>
        </div>
      </div>

      <ChefeSection />
    </>
  )
}
