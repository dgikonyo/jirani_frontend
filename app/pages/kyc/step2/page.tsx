import Continue from '../../../components/continue';
import Image from 'next/image';

export default function Page() {
    return (
        <form>
            <div className="conainer-fluid">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="kycLogo">
                            <Image
                                alt="jirani_logo"
                                src="/assets/img/logo/svg/logo-no-background.svg"
                                width={92}
                                height={30}
                            ></Image>
                        </div>

                        <div className="kycSteps">
                            <p>Step 2/4</p>
                        </div>

                        <div className="kycHeading1">
                            <p>Create a fundraiser with us</p>
                        </div>

                        <div className="kycHeading2">
                            <p>We will be together every step of the way</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label>Where are you located in Kenya?</label>
                        </div>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1">
                                What best describes your fundraiser
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li className="dropdown-item">Business venture</li>
                                <li className="dropdown-item">Wedding</li>
                                <li className="dropdown-item">Funeral</li>
                            </ul>
                        </div>

                        <div className="kycContinueBtn">
                            <Continue />
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}