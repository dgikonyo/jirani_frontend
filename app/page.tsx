import LandingPage from "./pages/landing-page/page"
import styles from "../public/styles/page.module.css"

export default function Page() {
  return (
    <main className={styles.main}>
      <LandingPage />
    </main>
  )
}