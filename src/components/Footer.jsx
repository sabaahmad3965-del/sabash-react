import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul style={{ textTransform: 'capitalize' }}>
            <li><NavLink to="/menu">Our Menu</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Our Menu</h3>
          <ul style={{ textTransform: 'capitalize' }}>
            <li><NavLink to="/menu">Burger King</NavLink></li>
            <li><NavLink to="/menu">Pizza King</NavLink></li>
            <li><NavLink to="/menu">Fresh Food</NavLink></li>
            <li><NavLink to="/menu">Vegetable</NavLink></li>
            <li><NavLink to="/menu">Desserts</NavLink></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>
          <ul style={{ textTransform: 'capitalize' }}>
            <li><a href="tel:+923001234567">+92 300 1234567</a></li>
            <li><a href="mailto:info@sabash.com">info@sabash.com</a></li>
            <li><NavLink to="/contact-us">Multan, Pakistan</NavLink></li>
          </ul>
        </div>

        <div className="footer-logo">
          <a href="#top">
            <img className="f-logo" src="/images/1.png" alt="Sabash Logo" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SABASH. All rights reserved.</p>
      </div>
    </footer>
  )
}
