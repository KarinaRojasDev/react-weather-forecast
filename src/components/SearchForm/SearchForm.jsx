const SearchForm = ({city,setCity})=> {
  
  const handleSubmit = (e) => {
        e.preventDefault();
        setCity(city.trim());
    };

    return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="city">Ciudad</label>
      <input
        id="city"
        type="text"
        value={city}
        placeholder="Busca una ciudad"
        onChange={(e) =>setCity(e.target.value)} 
      />

      <button type="submit">Buscar</button>

    </form>
  );
}
export default SearchForm;