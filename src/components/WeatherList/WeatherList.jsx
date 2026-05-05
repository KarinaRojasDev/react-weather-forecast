import WeatherCard from "../WeatherCard/WeatherCard";
import styles from "./WeatherList.module.css";

const WeatherList = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <section className={styles.list}>
      {weatherData.map((day) => (
        <WeatherCard key={day.date} day={day} />
      ))}
    </section>
  );
};

export default WeatherList;