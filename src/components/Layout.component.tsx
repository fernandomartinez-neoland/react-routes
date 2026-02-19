
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
