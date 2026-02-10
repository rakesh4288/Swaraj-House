import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div id="home-page">
      <section className="pageHeader">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <h4 className="pageHeading"> Welcome to Swaraj House <i className="bi bi-house-check-fill"></i> </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h5>
              The latest stable version of React is 19.2.0, <Link to="/react-19-features"><i><b>React 19 Features Just Checkout</b></i></Link> which was released on March 28, 2025. React 19 was officially released on December 5, 2024.
            </h5>
          </div>
        </div>
      </section>

      <section id="quick-learning" className="container mt-4 mb-5">
        <h3 className="text-center mb-5">Quick Learning Modules</h3>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Link to="/what-is-git-and-git-github" className="card cardHover h-100 shadow-sm border-warning text-decoration-none">
              <div className="card-body text-center">
                <i className="bi bi-git text-warning" style={{ fontSize: '2rem' }}></i>
                <h6 className="card-title mt-2 text-dark">Learning Git & GitHub</h6>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <Link to="/what-is-micro-front-end-architecture-in-react" className="card cardHover h-100 shadow-sm border-primary text-decoration-none">
              <div className="card-body text-center">
                <i className="bi bi-diagram-3 text-primary" style={{ fontSize: '2rem' }}></i>
                <h6 className="card-title mt-2 text-dark">Micro Front End Architecture</h6>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <Link to="/what-is-graphql" className="card cardHover h-100 shadow-sm border-danger text-decoration-none">
              <div className="card-body text-center">
                <i className="bi bi-graph-up text-danger" style={{ fontSize: '2rem' }}></i>
                <h6 className="card-title mt-2 text-dark">Learning GraphQL</h6>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <Link to="/learning-ci-cd-pipelines-with-jenkins" className="card cardHover h-100 shadow-sm border-success text-decoration-none">
              <div className="card-body text-center">
                <i className="bi bi-gear text-success" style={{ fontSize: '2rem' }}></i>
                <h6 className="card-title mt-2 text-dark">Jenkins CI/CD Pipelines</h6>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="alert alert-warning">
          <h6>https://github.com/rakesh4288/Swaraj-House</h6>
        </div>
      </section>

      <section id="how-to-optimize-react">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <h5>How to optimize the React App ?  Best Learning Video !!</h5>
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/CaShN6mCJB0?si=dGgjn5ixlUfyqxyK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <h5>Here is some Key points: </h5>
              <p>Here are some key points By which we can improve the React application performance:</p>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">Code Splitting</h6>
                      <p className="card-text">Divide the code into multiple parts to reduce bundle size and ease debugging.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">
                        <Link to="/react-hook-tutorial/use-memo-page" className="text-decoration-none">useMemo & useCallback Hook</Link>
                      </h6>
                      <p className="card-text">Use these hooks to optimize performance and prevent unnecessary re-renders.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">
                        <Link to="/what-is-lazy-loading-in-react" className="text-decoration-none">Lazy Loading</Link>
                      </h6>
                      <p className="card-text">Load components on demand using lazy and Suspense for better performance.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">
                        <Link to="/what-is-debouncing-and-throttling" className="text-decoration-none">Debouncing & Throttling</Link>
                      </h6>
                      <p className="card-text">Optimize event handling with setTimeout (debouncing) and setInterval (throttling).</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">
                        <Link to="/data-virtualization-in-react" className="text-decoration-none">Data Virtualization</Link>
                      </h6>
                      <p className="card-text">Handle large datasets efficiently without performance delays.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">Use Key Attribute in Lists</h6>
                      <p className="card-text">Always use keys in .map() to help React differentiate between nodes.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">
                        <Link to="/fragment-in-react" className="text-decoration-none">React Fragment</Link>
                      </h6>
                      <p className="card-text">Use Fragments to avoid unnecessary HTML nodes.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">ESLint for Better Coding</h6>
                      <p className="card-text">Use ESLint to maintain code quality and consistency.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title">Avoid Inline Styles & Events</h6>
                      <p className="card-text">Keep styles and events separate for better maintainability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="bg-primary" />

      <section id='how-to-setup-bootstrap-icons' className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h5>Bootstrap Icon: Step By Step Installation</h5>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/kS2AGb_cfgE?si=h_aZXY8OGkXTu_Jz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <Link to="https://icons.getbootstrap.com/" target="_blank">https://icons.getbootstrap.com/</Link>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/mrEqRh9GTlc?si=K5HtvRCnHNAuh2qI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            https://www.youtube.com/shorts/qa9ufHcRlSU
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;