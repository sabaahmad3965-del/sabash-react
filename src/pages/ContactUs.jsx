import { useState } from 'react'
import { contactCards } from '../data/restaurantData.js'

export default function ContactUs() {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    // TODO: connect this to your n8n webhook or email service to actually send the message.
    console.log('Contact form submitted:', form)
    alert('Thanks! Your message has been captured (connect this form to your backend/n8n webhook to actually send it).')
  }

  return (
    <>
      <div className="banner">
        <img src="/images/contact-us-banner.jpeg" alt="Contact Us Banner" />

        <div className="banner-text text1">
          <h6 style={{ color: 'darkgreen' }}>Welcome Sabash</h6>
          <h1>Contact Us</h1>
          <div className="text-box">
            <button><a style={{ color: 'white' }} href="/menu">ORDER NOW</a></button>
          </div>
        </div>

        <div className="banner-text text2">
          <h6 style={{ color: 'darkgreen' }}>Welcome Sabash</h6>
          <h1>Contact Us</h1>
          <div className="text-box">
            <button><a style={{ color: 'white' }} href="/menu">ORDER NOW</a></button>
          </div>
        </div>
      </div>

      <div className="contact-cards">
        {contactCards.map((card) => (
          <div className="card" key={card.id}>
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="fresheat-section style">
        <div className="style2">
          <img className="fresheat-img" src="/images/titleIcon.svg" alt="leaf icon" aria-hidden="true" />
          <p className="fresheat-text">Get In Touch</p>
          <img className="fresheat-img" src="/images/titleIcon.svg" alt="leaf icon" aria-hidden="true" />
        </div>
        <div className="food">
          <h2>Send Us a <br /> Message</h2>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <h2>We'd Love to <span>Hear</span> From You</h2>
          <p>
            Have a question, want to make a reservation, or just want to say hello?
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-text">
              <h4>Our Location</h4>
              <p>Multan, Punjab, Pakistan</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-text">
              <h4>Phone Number</h4>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div className="info-text">
              <h4>Email Address</h4>
              <p>info@sabash.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">🕒</div>
            <div className="info-text">
              <h4>Working Hours</h4>
              <p>Sun–Fri: 9 AM – 6 PM<br />Saturday: 9 AM – 4 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-box">
          <h3>Send a Message</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="fname" placeholder="e.g. ahmad" value={form.fname} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lname" placeholder="e.g. Khan" value={form.lname} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+92 300 0000000" value={form.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
              <option value="" disabled>Select a subject</option>
              <option value="reservation">Table Reservation</option>
              <option value="order">Order Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Write your message here..." value={form.message} onChange={handleChange} />
          </div>

          <button className="form-submit-btn" type="button" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us on <span>Map</span></h2>
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110819.49735766695!2d71.4210026874513!3d30.19566244993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b336d8b2b3b47%3A0x7cfb3f44e30e6100!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sabash Restaurant Location - Multan"
          ></iframe>
        </div>
      </div>
    </>
  )
}
