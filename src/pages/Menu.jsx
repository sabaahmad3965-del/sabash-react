import { menuCategories, menuDishes } from '../data/restaurantData.js'

export default function Menu() {
  return (
    <>
      <div className="banner">
        <img src="/images/menu-banner.png" alt="banner" />

        <div className="banner-text text1">
          <h6>welcome sabash</h6>
          <h1>our menu</h1>
          <div className="text-box">
            <button style={{ marginLeft: 20, marginTop: 60 }}>
              <a style={{ color: 'white' }} href="#">ORDER NOW</a>
            </button>
          </div>
        </div>

        <div className="banner-text text2">
          <h6>welcome sabash</h6>
          <h1>our menu</h1>
          <div className="text-box">
            <button style={{ marginLeft: 20, marginTop: 60 }}>
              <a style={{ color: 'white' }} href="#">ORDER NOW</a>
            </button>
          </div>
        </div>
      </div>

      <div className="menu-S">
        <div className="fresheat-section">
          <div className="style">
            <div className="style2">
              <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
              <h1 className="fresheat-text">FOOD MENU</h1>
              <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
            </div>
          </div>
        </div>

        <div className="food">
          <h2>sabash Foods Menu</h2>
        </div>

        <div className="menu-div">
          <ul className="menu-list">
            {menuCategories.map((cat) => (
              <li key={cat.id}>
                <a className="menus1" href="#">
                  <img className="menu-img" src={cat.img} alt="" />
                  <div className="small-div">
                    <h6 style={{ textTransform: 'capitalize' }}>{cat.name}</h6>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="true-menu">
          {menuDishes.map((dish) => (
            <div className="menu-5star" key={dish.id}>
              <div className="menu-4s">
                <img height="100px" src={dish.img} alt="thumb" />
              </div>
              <div className="menu-3s">
                <h3>{dish.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <h6>${dish.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
