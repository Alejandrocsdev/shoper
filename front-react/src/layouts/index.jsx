import Styles from './style.module.css'

function Layout({ children }) {
  return (
    <>
      <header className={Styles.header}>This is header</header>
      <main className={Styles.main}>{children}</main>
      <footer className={Styles.footer}>This is footer</footer>
    </>
  )
}

export default Layout
