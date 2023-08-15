import Image from 'next/image';
import styles from '../../../../public/assets/styles/page.module.scss';
import Link from 'next/link';

export default function Login() {
    return (
        <section className={styles.Login}>
            <nav className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <Image
                            alt="jirani_logo"
                            src="/assets/img/logo/svg/logo-no-background.svg"
                            width={92}
                            height={30}
                        ></Image>
                    </Link>
                </div>
            </nav>
            <div className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <Image
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid"
                                alt="Phone image"
                                width={300}
                                height={300}
                            ></Image>
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form1Example13" className="form-control form-control-lg" placeholder='Enter Email' />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <input type="password" id="form1Example23" className="form-control form-control-lg" placeholder='Enter Password' />
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                        <label className="form-check-label"> Remember me </label>
                                    </div>
                                    <a href="/pages/auth/forgot-password">Forgot password?</a>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                {/* <Link className="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
                                    role="button">
                                    <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                                </Link>
                                <Link className="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
                                    role="button">
                                    <i className="fab fa-twitter me-2"></i>Continue with Twitter</Link> */}
                                <p>Don't have an account, <Link href="/pages/auth/registration">Sign Up</Link> to our website</p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}