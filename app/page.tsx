import styles from '../public/assets/styles/page.module.scss'
import Navbar from './components/navbar.component';
import Footer from "./components/Footer.component";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

export default function Page() {
  const onboardingSteps = [
    {
      id: 1,
      address: "/assets/img/page-images/values-1.png",
      title: "Create an account with us",
      prompt: "Start off with providing us with your name and location",
    },
    {
      id: 2,
      address: "/assets/img/page-images/values-2.png",
      title: "Give us your story",
      prompt: "We'll guide you through the way",
    },
    {
      id: 3,
      address: "/assets/img/page-images/values-3.png",
      title: "Share with family and friends",
      prompt: "Lets walk tofgether every step of the way",
    },
  ];
  return (
    <main className={styles.main}>
    <Head>
      <title>Home -Jirani</title>
      <meta name="description" content="Jirani Home Page" />
    </Head>
    <div className='row'><Navbar /></div>
        <div className="container-fluid">
          <div className="hero row d-flex align-items-center">
            <div id="abovefold" className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  We offer modern solutions for growing your business
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  We are team of talented designers making websites with Bootstrap
                </h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <Link
                      href="#about"
                      className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Scroll Down</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 hero-img"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
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
              {onboardingSteps.map((onboardingStep) => {
                return (
                  <div
                    className="col-lg-4 mt-4 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    key={onboardingStep.id}
                  >
                    <div className="box">
                      <Image
                        src={onboardingStep.address}
                        className="img-fluid"
                        alt="steps"
                        width={440}
                        height={360}
                      ></Image>
                      <h3>{onboardingStep.title}</h3>
                      <p>{onboardingStep.prompt}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
      <Footer />
    </main>
  )
}