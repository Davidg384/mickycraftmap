import '../css/header.css'
import logo from '../images/logo.png'
function Header() {
  return (
    <section>
      <header className="site-header">
          <img className="logo" src={logo} alt="logo"></img>
          <h1 >
            MickyCraft.com
          </h1>

      </header>
    </section>
  );
}

export default Header;
