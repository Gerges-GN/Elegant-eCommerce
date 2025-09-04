import { Header } from '../components/common/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/footer/Footer'

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout 