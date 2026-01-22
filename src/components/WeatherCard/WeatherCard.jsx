import cloudy from "../../assets/cloudyday.svg";
import "./weatherCard.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75&deg; F </p>
      <img src={cloudy} alt="Cloudy weather" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
