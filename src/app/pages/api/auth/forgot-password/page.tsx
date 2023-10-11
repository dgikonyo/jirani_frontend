import Link from 'next/link';
import styles from '../../../../../../public/assets/styles/page.module.scss';

export default function Page() {
    return (
        <section className={styles.ForgotPassword}>
            <div className="card text-center">
                <div className="card-header h5 text-white bg-primary">Password Reset</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Enter your email address and we&apos;ll send you an email with instructions to reset your password.
                    </p>
                    <div className="form-outline">
                        <input type="email" id="typeEmail" className="form-control my-3" />
                        <label className="form-label">Email input</label>
                    </div>
                    <Link
                        href="#" 
                        className="btn btn-primary w-100"
                        >Reset password</Link>
                    <div className="d-flex justify-content-between mt-4">
                        <Link className="" href="#">Login</Link>
                        <Link className="" href="#">Register</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}