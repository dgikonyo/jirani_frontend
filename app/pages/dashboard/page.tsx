import styles from '../../../public/assets/styles/page.module.scss'
import FundCard from '../../components/dashboard/card'
import Navbar from '../../components/navbar'

export default function Page() {
    return (
        <section className={styles.Dashboard}>
            <div className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <Navbar />
                    </div>
                    <div className='row'>
                        <p>Your fundraisers</p>
                        <button>Start a new fundraiser</button>
                    </div>
                    <div className='row'>
                        <FundCard />
                    </div>
                </div>
            </div>
        </section>
    )
}