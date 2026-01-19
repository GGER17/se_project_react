import "./ItemCard.css";

function ItemCard({ data, onCardClick }) {
  function handleOpenCard() {
    onCardClick(data);
  }

  return (
    <div className="itemcard">
      <p className="itemcard__type">{data.name}</p>
      <img
        src={data.link}
        alt={data.name}
        className="itemcard__clothing"
        onClick={handleOpenCard}
      />
    </div>
  );
}

export default ItemCard;
