import styles from '../../../public/assets/styles/page.module.scss'

export default function LandingPageLayout({children,}: {children: React.ReactNode}) {
    return (
        <section className={styles.landingPageSection}>
            {children}
        </section>
    )
}