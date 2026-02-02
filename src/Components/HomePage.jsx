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

      <section id="how-to-optimize-react">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <h5>How to optimize the React App ?</h5>
              <p>Here are some key points By which we can improve the React application performance:</p>

              <ul>
                <li>
                  Code Spliting - We can divide the code in multiple parts By this wasy React bundle size can be a less and it will help to eady debug.
                </li>

                <li>
                  <Link to="/react-hook-tutorial/use-memo-page"> useMemo & useCallback Hook -</Link> we can use the useMemo and useCallback hook for increasing the performance and optimization of React application
                </li>


                <li>
                  <Link to="/what-is-lazy-loading-in-react"> Lazy Loading -</Link> Lazy Loading can also help to optimize the react app. If you have any component which is taking a time to load on the screen so you can bind these kind of component using lazy and suspense component.
                </li>

                <li>
                  <Link to="/what-is-debouncing-and-throttling"> Debouncing & Throttling -</Link> We should also use Debouncing and Throttling for increasing the React Application performance. Debouncing is working with setTimeout function and Throttling is using setInterval function.
                </li>

                <li>
                  <Link to="/data-virtualization-in-react">Data Virtualization - </Link> Data Virtualization is also helping for loading thousand and thousand of records without delaying. It is helping to optimize the React App.
                </li>

                <li>
                  <b>Use key attribute in list:</b> We should always use the key attributes while using .map() method Because React makes the difference between two HTML nodes.
                </li>

                <li>
                  <Link to="/fragment-in-react">React Fragment -</Link> We can also use the React Fragment to remvoe the unnecessary extra HTML node. We can use the blank html container to remove extra element.
                </li>

                <li>Using Es Lint for better coding experience.</li>
                <li>Don't use the Inline CSS styling and inline event.</li>
              </ul>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/CaShN6mCJB0?si=dGgjn5ixlUfyqxyK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id='how-to-setup-bootstrap-icons' className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h5>Bootstrap Icon: Step By Step Installation</h5>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/kS2AGb_cfgE?si=h_aZXY8OGkXTu_Jz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <Link to="https://icons.getbootstrap.com/" target="_blank">https://icons.getbootstrap.com/</Link>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/mrEqRh9GTlc?si=K5HtvRCnHNAuh2qI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            https://www.youtube.com/shorts/qa9ufHcRlSU
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;