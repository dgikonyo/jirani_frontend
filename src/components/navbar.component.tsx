import Link from "next/link"
import Image from "next/image"
import styles from "../../public/assets/styles/page.module.scss"
export default function Navbar() {
    return (
        <section className={styles.Navbar}>
            <nav className="navbar navbar-expand-lg navbar-scroll shadow-0">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <Image
                            alt="jirani_logo"
                            src="/assets/img/logo/svg/logo-no-background.svg"
                            width={92}
                            height={30}
                        ></Image>
                    </Link>
                    <button className="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link px-3" href="/pages/dashboard">For Individuals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" href="#!">For Chamas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" href="#!">For Charities</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <Link className="nav-link px-3" href="/page/how-it-works">How it works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" href="#">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" href="#">Create a Fundraiser</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}