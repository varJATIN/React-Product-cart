import { Link } from "react-router-dom";

function Header({ numberOfItems }) {
  console.log(numberOfItems);
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({numberOfItems})</Link>
    </header>
  );
}

export default Header;
