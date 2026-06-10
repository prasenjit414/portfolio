function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <img
        src={food.image}
        alt={food.name}
        className="food-image"
      />

      <div className="food-content">
        <h3>{food.name}</h3>
        <p>₹{food.price}</p>

        <button
          className="cart-btn"
          onClick={() => addToCart(food)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;