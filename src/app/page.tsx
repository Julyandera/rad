// Components
import Banner from './components/Banner'
import Brands from './components/Brands'
import ProductsCarousel from './components/ProductsCarousel'

export default function Home() {
  return (
    <div className='w-full'>
      <Banner />
      <Brands />
      <ProductsCarousel />
    </div>
  )
}