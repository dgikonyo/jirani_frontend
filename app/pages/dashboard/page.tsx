import styles from '../../../public/assets/styles/page.module.scss'
import FundCard from '../../components/dashboard/card'
import Navbar from '../../components/navbar'

export default function Page() {
    return (
        <section className={styles.dashboardSection}>
            <div className="hero d-flex align-items-center">
                <div className="container-fluid"> 
                    <div className='fundHero row justify-content-center'>
                        <div className='col-sm-12 col-lg-8 col-xs-12'>
                            <div className='fundraiserLabel'>
                                <p>Your fundraisers</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-4 col-xs-12'>
                            <div className='fundBtn'>
                                <button>Start a new fundraiser</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <FundCard />
                    </div>
                </div>
            </div>
        </section>
    )
}