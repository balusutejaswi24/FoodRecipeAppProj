
import { useState, useEffect } from "react";

import "../styles/RecipeReviews.css";

function RecipeReviews({ recipe, user }) {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const allReviews = JSON.parse(
      localStorage.getItem("recipeReviews") || "[]"
    );

    const recipeReviews = allReviews.filter(
      (review) => String(review.recipeId) === String(recipe.id)
    );

    setReviews(recipeReviews);
  }, [recipe.id]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) {
      alert("Please write your review.");
      return;
    }

    const allReviews = JSON.parse(
      localStorage.getItem("recipeReviews") || "[]"
    );

    const newReview = {
      id: Date.now(),
      recipeId: recipe.id,
      recipeName: recipe.name,
      user: user || "Guest",
      rating: rating,
      text: text.trim(),
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [
      ...allReviews,
      newReview,
    ];

    localStorage.setItem(
      "recipeReviews",
      JSON.stringify(updatedReviews)
    );

    setReviews((previous) => [
      ...previous,
      newReview,
    ]);

    setText("");
    setRating(5);

    alert("Review submitted successfully!");
  }

  return (
    <div className="recipe-reviews">

      <h3>⭐ Reviews & Ratings</h3>

      <form onSubmit={handleSubmit}>

        <label>Give Rating</label>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={5}>⭐⭐⭐⭐⭐ 5 - Excellent</option>
          <option value={4}>⭐⭐⭐⭐ 4 - Very Good</option>
          <option value={3}>⭐⭐⭐ 3 - Good</option>
          <option value={2}>⭐⭐ 2 - Average</option>
          <option value={1}>⭐ 1 - Poor</option>
        </select>

        <label>Write Your Review</label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your experience with this recipe..."
          rows="4"
          maxLength="500"
        />

        <button type="submit">
          Submit Review
        </button>

      </form>

      <h3>
        User Reviews ({reviews.length})
      </h3>

      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review!</p>
      ) : (
        reviews.map((review) => (
          <div
            className="review-item"
            key={review.id}
          >

            <div className="review-header">
              <strong>{review.user}</strong>

              <span>
                {"⭐".repeat(review.rating)}
              </span>
            </div>

            <p>{review.text}</p>

            <small>{review.date}</small>

          </div>
        ))
      )}

    </div>
  );
}

export default RecipeReviews;
