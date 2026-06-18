import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky-header">
      {/* Top red bar */}
      <div className="red-bg">
        <div className="top-bar">
          <span className="time-box">
            <img
              style={{ width: 24, height: 24 }}
              className="time"
              src="/images/clock-icon.png"
              alt="time"
            />
            9:00am - 6:00pm
          </span>
          <span className="social-box">
            <span className="follow-text">Follow Us:</span>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src="/images/canv.y.png" alt="YouTube" width="25px" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/canv.f.png" alt="Facebook" width="20px" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/images/canva.t.png" alt="Twitter" width="20px" />
            </a>
            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
              <img src="/images/canv.waths.png" alt="WhatsApp" width="20px" />
            </a>
          </span>
        </div>
      </div>

      {/* Nav bar */}
      <div className="black-bg">
        <div className="nav-wrapper">
          {/* Logo */}
          <div className="logo">
            <NavLink to="/">
              <img src="/images/1.png" alt="logo" />
            </NavLink>
          </div>

          {/* Desktop nav links */}
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink>
            <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
          </nav>

          {/* Hamburger button — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}