import styles from '../../../public/assets/styles/page.module.scss'
import Navbar from '../../components/navbar'

export default function Page() {
    return (
        <section className={styles.Dashboard}>
            <div className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <Navbar />
                    </div>
                </div>
            </div>
        </section>
    )
}