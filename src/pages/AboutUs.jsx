import { weeklyOffers } from '../data/restaurantData.js'
import ChefeSection from '../components/ChefeSection.jsx'

export default function AboutUs() {
  return (
    <>
      <div className="banner">
        <img src="/images/about-us-banner.jpeg" alt="banner" />

        <div className="banner-text text1">
          <h6>welcome sabash</h6>
          <h1>about us</h1>
          <div className="text-box">
            <button style={{ marginLeft: 20, marginTop: 60 }}>
              <a style={{ color: 'white' }} href="#">ORDER NOW</a>
            </button>
          </div>
        </div>

        <div className="banner-text text2">
          <h6>welcome sabash</h6>
          <h1>about us</h1>
          <div className="text-box">
            <button style={{ marginLeft: 20, marginTop: 60 }}>
              <a style={{ color: 'white' }} href="#">ORDER NOW</a>
            </button>
          </div>
        </div>
      </div>

      <div className="chefe-section">
        <div className="food">
          <div className="fresheat-section">
            <div className="style">
              <div className="style2">
                <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
                <h1 className="fresheat-text">OUR CHEFE</h1>
                <img src="/images/titleIcon.svg" alt="img" className="fresheat-img" />
              </div>
            </div>
          </div>
          <h2>Meet Our Expert Chefe</h2>
        </div>
      </div>

      <ChefeSection />

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
                fontSize: 38,
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
          It is a long established fact that a reader will be distracted the readable
          content of a page when looking at layout the point established fact that
        </div>
        <div className="text-box">
          <button style={{ marginBottom: 50 }}>
            <a style={{ color: 'white' }} href="#">ORDER NOW</a>
          </button>
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
    </>
  )
}
