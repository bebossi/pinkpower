import style from "./style.module.css";

function SearchBar(props) {
  const { search, setSearch } = props;

  function handleChange(currentElement) {
    setSearch(currentElement.target.value);
  }

  return (
    <div className={style.navbarSearch}>
      <input type="text" value={search} onChange={handleChange} />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
