import { Link, useNavigate } from 'react-router-dom';
import AppImages from '../assets';

const SiteHeader = () => {
  const swaraj_navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    const confirm = window.confirm('Are you want to logout ?');
    if (confirm) {
      localStorage.clear();
      swaraj_navigate("/logout");
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navBg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <span style={{paddingRight: '10px'}}>
              <b>
                <span className="logoOrange">स्व</span><span className="logoWhite">रा</span><span className="logoGreen">ज</span>
              </b>
            </span>
            <img src={AppImages.React_Logo} className="AppLogo" alt="React logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/react-basic">React Basic</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/react-redux-tutorial"></Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Redux Tutorial
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/react-redux-tutorial">Know about React Redux </Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/react-router-dom">Router Dom</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/api-integration-in-react">API Integration</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  React Hooks
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/interview-preparation-1">Interviw Page 1</Link></li>
                  <li><Link className="dropdown-item" to="/interview-page-2">Interviw Page 2</Link></li>
                  <li><Link className="dropdown-item" to="/to-do-practice-page">To Do Practice</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/javascript-es6-features">ES6 Features</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Interview Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/interview-preparation-1">Interviw Page 1</Link></li>
                  <li><Link className="dropdown-item" to="/interview-page-2">Interviw Page 2</Link></li>
                  <li><Link className="dropdown-item" to="/to-do-practice-page">To Do Practice</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle"></i> User Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/user-profile">My Profile</Link></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    {token && (
                      <span className="dropdown-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        Logout
                      </span>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader;