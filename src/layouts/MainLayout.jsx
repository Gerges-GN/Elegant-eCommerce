import { Header } from '../components/common/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer'

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