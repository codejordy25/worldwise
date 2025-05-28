import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
