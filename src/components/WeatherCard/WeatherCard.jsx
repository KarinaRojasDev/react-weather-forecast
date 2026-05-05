import { v4 as uuidv4 } from "uuid";
import styles from "./WeatherCard.module.css";

const WeatherCard = ({ day }) => {
  if (!day) return null;

  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.date}>{day.date}</h2>
      </header>

      <ul className={styles.hoursList}>
        {day.hours.map((hour) => (

          <li key={uuidv4()} className={styles.hourItem}>
            <article className={styles.hourCard}>

              <p className={styles.time}>{hour.dt_txt.split(" ")[1]}</p>

              <p className={styles.temp}>{hour.main.temp}°C</p>

              <p className={styles.state}>{hour.weather[0].main}</p>

              <img  
                className={styles.icon}
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                alt={hour.weather[0].description}
              />

            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WeatherCard;