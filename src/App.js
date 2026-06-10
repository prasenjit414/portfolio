import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const foods = [
    {
      id: 1,
      name: "Burger",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    },
    {
      id: 2,
      name: "Pizza",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    },
    {
      id: 3,
      name: "Biryani",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400",
    },
    {
      id: 4,
      name: "Pasta",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
    },
  ];

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>🍔 GoodFood</h1>

        <div>
          <h3>🛒 Cart: {cart.length}</h3>
          <h3>Total: ₹{total}</h3>
        </div>
      </nav>

      <input
        type="text"
        placeholder="Search Food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              width: "250px",
              padding: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{food.name}</h3>
            <p>₹{food.price}</p>

            <button
              onClick={() => addToCart(food)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;