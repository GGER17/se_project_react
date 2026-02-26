import "./ItemCard.css";
import liked from "../../assets/liked.svg";
import unliked from "../../assets/unliked.svg";

function ItemCard({ data, onCardClick, onCardLike, currentUser }) {
  const isLiked = data.likes.some((id) => id === currentUser?._id);

  function handleOpenCard() {
    onCardClick(data);
  }

  function handleLike(event) {
    event.stopPropagation();
    onCardLike({ id: data._id, isLiked }); // Toggle like status
  }

  const likeButtonClass = `item-card__like-btn ${isLiked ? "item-card__like-btn_active" : ""}`;

  return (
    <div className="item-card">
      <div className="item-card__header">
        <p className="item-card__type">{data.name}</p>
        {currentUser?._id && (
          <button className="item-card__like-btn" onClick={handleLike}>
            <img
              src={isLiked ? liked : unliked}
              alt="like button"
              className="item-card__like-icon"
            />
          </button>
        )}
      </div>
      <img
        src={data.imageUrl}
        alt={data.name}
        className="item-card__clothing"
        onClick={handleOpenCard}
      />
    </div>
  );
}

export default ItemCard;
