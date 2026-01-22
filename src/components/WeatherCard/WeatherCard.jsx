import cloudy from "../../assets/cloudyday.svg";
import "./weatherCard.css";

function WeatherCard() {
  return (
    <section className="weathercard">
      <p className="weathercard__temp">75&deg; F </p>
      <img src={cloudy} alt="Cloudy weather" className="weathercard__image" />
    </section>
  );
}

export default WeatherCard;
