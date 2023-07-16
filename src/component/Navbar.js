import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar({ itemList }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/shopping-cart" state={itemList}>
        Cart{itemList.length ? itemList.length : null}
      </NavLink>
    </nav>
  );
}
