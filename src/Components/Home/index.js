import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { Link } from "react-router-dom";

export function Home() {
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
      <h1>Pink Power</h1>

      {character.map((e) => {
        return (
          <>
            <Link to={`/characters/${e.id}`}>
              <img src={e.attributes.imageURL} alt="Foto do personagem" />
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
}
