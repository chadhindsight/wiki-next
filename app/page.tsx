import Image from 'next/image'
import styles from './page.module.css'
import Header from './api/components/Header'
import Footer from './api/components/Footer'
import Search from './api/components/Search'

export default function Home() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Search />
        <Footer />
      </main>
    </>
  )
}
