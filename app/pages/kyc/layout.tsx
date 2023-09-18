import styles from '../../../public/assets/styles/page.module.scss'

export default function KycPageLayout({children,}: {children: React.ReactNode}) {
    return (
        <section className={styles.kycPageSection}>
            {children}
        </section>
    )
}