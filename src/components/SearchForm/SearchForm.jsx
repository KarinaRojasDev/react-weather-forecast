import styles from "./SearchForm.module.css";

const SearchForm = ({city,setCity})=> {
  
  const handleSubmit = (e) => {
        e.preventDefault();
        setCity(city.trim());
    };

    return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <label htmlFor="city">Ciudad</label>
      <input
        className={styles.input}
        id="city"
        type="text"
        value={city}
        placeholder="Busca una ciudad"
        onChange={(e) =>setCity(e.target.value)} 
      />

      <button  className={styles.button} type="submit">Buscar</button>

    </form>
  );
}
export default SearchForm;