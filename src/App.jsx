import "./App.css";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  



  const toggleModal = () => {
    setShowModal(!showModal);
    setShowSignInModal(false);
  };
  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
    // Function to toggle Sign In modal
    setShowModal(false);
  };

  return (
    <div>
      <nav className="navbar nav mb-2 ">
        <div className="container-fluid d-lg-flex justify-content-around align-items-center">
          <img
            className="ml-10  "
            src="/images/main image.svg"
            alt="atg world"
          />
          <div
            style={{
              width: "460px",
              backgroundColor: "gray",
              marginTop: "2px",
            }}
            className="d-flex align-items-center  justify-content-center border  px-3 rounded-pill"
          >
            <img
              width="20px"
              style={{ marginLeft: "8px" }}
              src="/images/magnify.svg"
              alt="search icon"
            />
            <input
              className="form-control  w-100 text-dark shadow-none border-0"
              type="search"
              placeholder="Search for your favourite groups in ATG"
              aria-label="Search"
              style={{ marginLeft: "15px", backgroundColor: "gray" }}
            />
          </div>
          <div className="d-flex align-items-center mt-1">
            <p
              className="fw-bold mt-1"
              style={{ cursor: "pointer" }}
              onClick={toggleModal}
            >
              Create account.
              <span className="text-primary fw-bold">It's Free!</span>
            </p>
          </div>
        </div>
      </nav>
      <div className="container-fluid  position-relative ">
        <img
          className="img-fluid w-100 position-absolute top-0 start-0"
          src="/images/section1.svg"
          alt="background"
          style={{ opacity: 0.25 }}
        />
        <img
          className="img-fluid w-100 position-absolute top-0 start-0"
          src="/images/section12.svg"
          alt="background overlay"
          style={{ opacity: 0.85 }}
        />
        <div
          className="position-relative container-fluid d-flex flex-column text-center text-white"
          style={{ minHeight: "65vh" }}
        >
          <p
            className="fw-bold text-center text-overlay fs-1 position-absolute w-100"
            style={{ top: "55%", left: "-25%", opacity: 1 }}
          >
            Computer Engineering
          </p>
          <p
            className="position-absolute w-100"
            style={{ top: "68%", left: "-25%", opacity: 1 }}
          >
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
      <div className="container-fluid  w-100 ">
        <div className="d-flex justify-content-between align-items-center mb-2 ">
          <div
            className="d-flex justify-content-between w-25  "
            style={{ marginLeft: "130px" }}
          >
            <div className="hover-border">
              <p
                href="#"
                className="mr-3 text-dark mt-3 "
                style={{ cursor: "pointer" }}
              >
                All Posts
              </p>
            </div>
            <div className="hover-border">
              <p
                href="#"
                className="mr-3 text-dark mt-3  "
                style={{ cursor: "pointer" }}
              >
                Article
              </p>
            </div>
            <div className="hover-border">
              <p
                href="#"
                className="mr-3 text-dark mt-3 "
                style={{ cursor: "pointer" }}
              >
                Event
              </p>
            </div>
            <div className="hover-border">
              <p
                href="#"
                className="mr-3 text-dark mt-3 "
                style={{ cursor: "pointer" }}
              >
                Education
              </p>
            </div>
            <div className="hover-border">
              <p
                href="#"
                className="text-dark  mt-3 "
                style={{ cursor: "pointer" }}
              >
                Job
              </p>
            </div>
          </div>
          <div
            className="d-flex align-items-center gap-3 "
            style={{ marginRight: "98px" }}
          >
            <button
              className="btn btn-outline-secondary dropdown-toggle mr-2"
              type="button"
            >
              Write a Post
            </button>
            <button className="btn btn-primary">Join Group</button>
          </div>
        </div>
        <div
          className=" "
          style={{
            width: "1230px",
            height: "0.5px",
            border: "0.05px solid black",
            marginLeft: "126px",
            opacity: 0.15,
          }}
        ></div>
      </div>
      <div className="container-fluid mt-5 w-100">
        <div className="row  ">
          <div className="col-md-1"></div>
          <div className="col-md-7">
            {/* Post 1 */}
            <div className="card mb-4">
              <img
                src="/images/image1.svg"
                className="card-img-top"
                alt="article thumbnail"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>✍️ Article</div>
                  <div className="dropdown">
                    <button
                      className="btn fs-3  border-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 className="card-title">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h5>
                <p className="card-text">
                  I've worked in UX for the better part of a decade. From now
                  on, I plan to re...
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="/images/sarthak.svg"
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <span style={{ marginLeft: "15px", fontWeight: "700" }}>
                      Sarthak Kamra
                    </span>
                  </div>
                  <div>
                    <span className="mr-2">👁️ 1.4k views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="card mb-4">
              <img
                src="/images/image2.svg"
                className="card-img-top"
                alt="article thumbnail"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>🎓 Education</div>

                  <div className="dropdown">
                    <button
                      className="btn fs-3  border-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 className="card-title">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </h5>
                <p className="card-text">
                  I've worked in UX for the better part of a decade. From now
                  on, I plan to re...
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="/images/sarah.svg"
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <span
                      className="ml-2 fw-bold"
                      style={{ marginLeft: "15px" }}
                    >
                      Sarah West
                    </span>
                  </div>
                  <div>
                    <span className="mr-2">👁️ 1.4k views</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <img
                src="/images/image3.svg"
                className="card-img-top"
                alt="article thumbnail"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>📝 MeetUp</div>

                  <div className="dropdown">
                    <button
                      className="btn fs-3  border-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 className="card-title">
                  Finance & Investment Elite Social Mixer @Lujiazui
                </h5>
                <div
                  className="card-text d-flex gap-5 "
                  style={{ marginTop: "15px" }}
                >
                  <p> 📅 Fri,12 Oct,2018</p>
                  <p> 📍Ahmedabad,India</p>
                </div>
                <div className="w-100 ">
                  <button className="w-100 border-1  shadow-none rounded-2 p-1 mb-3 bg-white ">
                    <span className="text-warning">View Website</span>
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src="/images/rolan.svg" />
                  </div>
                  <div>
                    <span className="mr-2">👁️ 1.4k views</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>💼 Job</div>
                  <div className="dropdown">
                    <button
                      className="btn fs-3  border-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 className="card-title">Software Developer</h5>
                <div
                  className="card-text d-flex gap-5 "
                  style={{ marginTop: "15px" }}
                >
                  <p> 💼 Innovaccer Analytics Private Ltd</p>
                  <p> 📍Noida,India</p>
                </div>
                <div className="w-100 ">
                  <button className="w-100 border-1  shadow-none rounded-2 p-1 mb-3 bg-white ">
                    <span className="text-success">Apply on TimesJobs</span>
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="/images/joseph.svg"
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <span
                      className="fs-4"
                      style={{ marginLeft: "15px", fontWeight: "700" }}
                    >
                      Joseph Gray
                    </span>
                  </div>
                  <div>
                    <span className="mr-2">👁️ 1.4k views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div
              className="d-flex justify-content-between align-items-center mb-3 "
              style={{ marginLeft: "104px" }}
            >
              <div className="d-flex gap-1">
                <img src="/images/location.svg" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="ml-2 border-0 "
                  style={{ outline: "none" }}
                />
              </div>
              <img src="/images/pen.svg" />
            </div>
            <div
              style={{
                width: "230px",
                borderBottom: "1px solid black",
                height: "1px",
                marginLeft: "105px",
                opacity: 0.25,
              }}
            ></div>
            <img
              className="mt-3"
              style={{ marginLeft: "72px", height: "40px" }}
              src="/images/your.svg"
            ></img>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      {showSignInModal && (
        <div className="modal-backdrop">
          <div
            className="form-container "
            style={{ width: "750px", height: "553px" }}
          >
            <button className="close-button" onClick={toggleSignInModal}>
              &times;
            </button>
            <div className="row">
              <div className="col-md-6 p-5 mt-4 ">
                <h2 className="mb-5">Sign In</h2>
                <form className="bg-tertiary">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill mt-3 btn-block w-100"
                  >
                    Sign In
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light mt-5 btn-block w-100"
                  >
                    <span>
                      <img
                        style={{ width: "25px", marginRight: "5px" }}
                        src="/images/Logo-Search-Google--on-transparent-background-PNG.png"
                      />
                    </span>
                    Sign Up with Google
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light mt-1  btn-block w-100"
                  >
                    <span>
                      <img
                        style={{ width: "25px", marginRight: "5px" }}
                        src="/images/download.png"
                      />
                    </span>
                    Sign Up with Facebook
                  </button>
                  <p className="fw-bold mt-2" style={{ marginLeft: "75px" }}>
                    Forgot Password
                  </p>
                </form>
              </div>
              <div
                className="col-md-6 d-flex flex-column  align-items-center"
                style={{ marginTop: "80px" }}
              >
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-primary fw-bold"
                    onClick={toggleModal}
                    style={{ cursor: "pointer" }}
                  >
                    Create new for free
                  </span>
                </p>
                <img
                  src="/images/form.svg"
                  alt="Illustration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="modal-backdrop">
          <div
            className="form-container "
            style={{ width: "750px", height: "553px" }}
          >
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
            <div className="row">
              <div className="col-md-6 p-5 mt-4 ">
                <h2 className="mb-5">Create Account</h2>
                <form className="bg-tertiary">
                  <div className="d-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill mt-3 btn-block w-100"
                  >
                    Create Account
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light mt-5 btn-block w-100"
                  >
                    <span>
                      <img
                        style={{ width: "25px", marginRight: "5px" }}
                        src="/images/Logo-Search-Google--on-transparent-background-PNG.png"
                      />
                    </span>
                    Sign Up with Google
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light mt-1  btn-block w-100"
                  >
                    <span>
                      <img
                        style={{ width: "25px", marginRight: "5px" }}
                        src="/images/download.png"
                      />
                    </span>
                    Sign Up with Facebook
                  </button>
                </form>
              </div>
              <div
                className="col-md-6 d-flex flex-column  align-items-center"
                style={{ marginTop: "80px" }}
              >
                <p>
                  Already Have an account?{" "}
                  <span
                    onClick={toggleSignInModal}
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer" }}
                  >
                    Sign In
                  </span>
                </p>
                <img
                  src="/images/form.svg"
                  alt="Illustration"
                  className="img-fluid"
                />
                <img src="/images/write.svg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
