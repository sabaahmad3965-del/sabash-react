import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'

export default function Layout() {
  return (
    <div id="top">
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  )
}
