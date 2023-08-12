import Navbar from "../../components/navbar";
import styles from "../../../public/assets/styles/page.module.scss"
import OnboardingSteps from "../../components/card-steps";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    const props = [
        {
            address: "/assets/img/page-images/values-1.png",
            title: "Create an account with us",
            prompt: "Start off with providing us with your name and location"
        },
        {
            address: "/assets/img/page-images/values-2.png",
            title: "Give us your story",
            prompt: "We'll guide you through the way"
        },
        {
            address: "/assets/img/page-images/values-3.png",
            title: "Share with family and friends",
            prompt: "Lets walk tofgether every step of the way"
        },
    ];
    return (
        <section className={styles.landingPage}>
            <div className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <Navbar />
                    </div>
                    <div id="abovefold" className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div className="text-center text-lg-start">
                                    <Link href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Scroll Down</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            <Image
                                src="/assets/img/page-images/landing/hero-img.png"
                                className="img-fluid"
                                alt="hero_image"
                                width={500}
                                height={500}
                            ></Image>
                        </div>
                    </div>
                    <div className="row">
                        {props.map((props) => {
                            return (
                                <OnboardingSteps {...props} />
                            );
                        })}
                    </div>
                    <div className="row" id="fotter">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}