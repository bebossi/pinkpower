import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import SearchBar from "../SearchBar";

export function Home() {
  const [search, setSearch] = useState("");
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await api.get(`/characters`);
        setCharacter(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <>
      <h1 className={style.title}>Pink Power</h1>

      <div className={style.search}>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className={style.oDiv}>
        {character
          .filter((char) => {
            return char.attributes.name
              .toLocaleLowerCase()
              .includes(search.toLowerCase());
          })
          .map((e) => {
            return (
              <div className={style.container}>
                <Link to={`/characters/${e.id}`}>
                  <img
                    src={e.attributes.imageURL}
                    alt="Foto do personagem"
                    className={style.image}
                  />
                  <div className={style.overlay}>
                    <div className={style.text}>{e.attributes.name}</div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
