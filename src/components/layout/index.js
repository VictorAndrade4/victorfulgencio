import Link from 'next/link'

import styles from './layout.module.css'
import Footer from '../../components/footer'
import utilStyles from '../../styles/utils.module.css'

const name = 'victorfulgencio'

const Layout = ({ children, home }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      {home ? (
        <>
          <img
            src="/images/profile.jpeg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <img
                src="/images/profile.jpeg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (<Footer />)}
  </div>
)

export default Layout
