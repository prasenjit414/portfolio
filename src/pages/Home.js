import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>🍔 GoodFood Home</h1>

      <Link to="/cart">
        <button>Go To Cart</button>
      </Link>
    </div>
  );
}

export default Home;