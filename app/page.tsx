import LandingPage from "./pages/landing-page/page"
import styles from "../public/assets/styles/page.module.scss"

export default function Page() {
  return (
    <main className={styles.main}>
      <LandingPage />
    </main>
  )
}