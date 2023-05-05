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
        <p className="mb-6 text-lg font-normal text-neutral-700 lg:text-xl sm:px-16 xl:px-48 dark:text-neutral-400">Enter your search query below and a list of related search results will be listed. From there, you can select any of them to be
          redirected to the corresponding Wikipedia article.
        </p>
        <Search />
        <Footer />
      </main>
    </>
  )
}
