import Navbar from "../../components/navbar";
import styles from "../../../public/assets/styles/page.module.scss"

export default function Page() {
    return (
        <section className={styles.landingPage}>
            <div className="container">
                <div className="row">
                    <Navbar />
                </div>
                <div id="abovefold"className="row">

                </div>
            </div>
        </section>
    )
}