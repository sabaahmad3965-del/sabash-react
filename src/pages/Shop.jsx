import { popularFoodItems, bestSellingDishes, weeklyOffers } from '../data/restaurantData.js'

export default function Shop() {
  return (
    <>
      <div className="banner">
        <img src="/images/shop-banner.png" alt="banner" />

        <div className="banner-text text1">
          <h6>welcome sabash</h6>
          <h1 style={{ textTransform: 'capitalize' }}>shop</h1>
          <div className="text-box">
            <button style={{ marginLeft: 20, marginTop: 60 }}>
              <a style={{ color: 'white' }} href="#">ORDER NOW</a>
            </button>
          </div>
        </div>

        <div className="banner-text text2">
          <h6>welcome sabash</h6>
          <h1 style={{ textTransform: 'capitalize' }}>shop</h1>
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
    </>
  )
}
