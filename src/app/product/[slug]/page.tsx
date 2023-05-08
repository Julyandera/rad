// Components
import Product from './components/Product';
import ProductsCarousel from './components/ProductsCarousel'

export default function ProductPage() {

    return (
        <div className='w-full lg:flex flex-col justify-center'>
            <Product />
            <ProductsCarousel />
        </div>
    );
}
