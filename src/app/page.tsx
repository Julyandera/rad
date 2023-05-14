// Components
import Banner from './components/Banner'
import Brands from './components/Brands'
import ProductsCarousel from './components/ProductsCarousel'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface ProductType {
  id: number,
  name: string,
  images: string[],
  price: number,
  category_id: number,
  slug: string

}

const fetchProducts = async () => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      images: true,
      price: true,
      category_id: true,
      slug: true
    }
  })

  return products
}

export default async function Home() {
  const products = await fetchProducts()

  return (
    <div className='w-full'>
      <Banner />
      <Brands />
      <ProductsCarousel products={products} />
    </div>
  )
}