import Image from 'next/image'
import styles from './page.module.css'
import ProductCard from './components/ProductCard'
import topBar from './components/topBar'


export default function Home() {
  return (
    <main>
      <h1 className='text-danger'>Hello</h1>
      <topBar />
      <ProductCard />
    </main>
  )
}
