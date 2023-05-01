import Image from 'next/image'
import styles from './page.module.css'
import Header from './api/components/Header'
import Footer from './api/components/Footer'
// sdf

export default function Home() {
  // placeholder
  // const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Footer />
      </main>
    </>
  )
}
