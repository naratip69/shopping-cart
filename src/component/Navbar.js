import { Link, Outlet } from "react-router-dom";

export default function Navbar({ itemList }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shopping-cart">
        Cart{itemList.length ? itemList.length : null}
      </Link>
      <Outlet context={{ itemList: itemList }} />
    </nav>
  );
}
