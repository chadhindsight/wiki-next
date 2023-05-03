import Image from 'next/image'
import styles from './page.module.css'
import Header from './api/components/Header'
import Footer from './api/components/Footer'

export default function Home() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Footer />
      </main>
    </>
  )
}
