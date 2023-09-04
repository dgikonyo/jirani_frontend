import Image from "next/image";
import styles from "../../../public/assets/styles/page.module.scss";

export default function Page() {
  return (
    <section className={styles.kycSection}>
      <div className="conainer-fluid px-0">
        <div className="row g-0">
          {/* First column */}
          <div id="left" className="col-lg-6 vh-100">
            <div className="row">
              <Image
                alt="jirani_logo"
                src="/assets/img/logo/svg/logo-no-background.svg"
                width={92}
                height={30}
              ></Image>
            </div>
            <p>Create a fundraiser with us</p>
            <p>We will be together every step of the way</p>
          </div>

          <div id="right" className="col-lg-6 vh-100 bg-primary">
            <label>Where are you located in Kenya?</label>
            <input placeholder="optional"></input>

            <label>What best describes your fundraiser?</label>
            {/* provide list of options */}
          </div>
        </div>
      </div>
    </section>
  );
}
