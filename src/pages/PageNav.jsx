import { Link } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Pricing">Pricing</Link>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
