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

export interface BannerType {
  id: number,
  related_product: string,
  images: string[]
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

const fetchBanners = async () => {
  const banners = await prisma.banner.findMany({
    select: {
      id: true,
      related_product: true,
      images: true
    }
  })

  return banners;
}

export default async function Home() {
  const products = await fetchProducts()
  const banners = await fetchBanners()

  return (
    <div className='w-full'>
      <Banner banners={banners} />
      <Brands />
      <ProductsCarousel products={products} />
    </div>
  )
}