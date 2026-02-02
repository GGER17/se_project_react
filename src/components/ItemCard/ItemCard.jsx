import "./ItemCard.css";

function ItemCard({ data, onCardClick }) {
  function handleOpenCard() {
    onCardClick(data);
  }

  return (
    <div className="item-card">
      <p className="item-card__type">{data.name}</p>
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
