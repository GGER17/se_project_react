import "./ItemCard.css";

function ItemCard({ data }) {
  return (
    <div className="itemcard">
      <p className="itemcard__type">{data.name}</p>
      <img
        src={data.link}
        alt="Article of clothing"
        className="itemcard__clothing"
      />
    </div>
  );
}

export default ItemCard;
