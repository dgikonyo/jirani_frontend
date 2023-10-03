import Image from "next/image";
import Continue from "../../components/continueBtn.component";

export default function Page() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
          <div className="card d-flex mx-auto my-5">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12 c1 p-5">
                <div className="row mb-5 m-3">
                  <Image
                    src="/assets/img/logo/svg/logo-no-background.svg"
                    width={70}
                    height={55}
                    alt=""
                  ></Image>
                </div>
                <Image
                  src="/assets/img/logo/svg/logo-no-background.svg"
                  width={120}
                  height={210}
                  className="mx-auto d-flex"
                  alt="Teacher"
                ></Image>
                <div className="row justify-content-center">
                  <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                    <h1 className="wlcm">Welcome to your blackboard</h1>
                    <span className="sp1">
                      <span className="px-3 bg-danger rounded-pill"></span>
                      <span className="ml-2 px-1 rounded-circle"></span>
                      <span className="ml-2 px-1 rounded-circle"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5">
                <form name="myform" className="px-5 pb-5">
                  <div className="d-flex">
                    <Image src="/assets/img/logo/svg/logo-no-background.svg" height={22} width={22} alt="" className="mr-3 mt-2"></Image>
                    <h3 className="font-weight-bold">Log in</h3>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Where are you located in Kenya?</label>
                  </div>

                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1">
                      Who are you fundraising for?
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li className="dropdown-item">Business venture</li>
                      <li className="dropdown-item">Wedding</li>
                      <li className="dropdown-item">Funeral</li>
                    </ul>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Your target amount</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Provide a title for the fundraiser</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Tell us your story</label>
                  </div>
                  <div className="kycContinueBtn">
                    <Continue />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
