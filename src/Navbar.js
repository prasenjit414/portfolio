function Navbar({ cartCount, total }) {
  return (
    <div className="navbar">
      <h1>🍔 GoodFood</h1>

      <div>
        <h3>🛒 {cartCount}</h3>
        <h3>₹{total}</h3>
      </div>
    </div>
  );
}

export default Navbar;