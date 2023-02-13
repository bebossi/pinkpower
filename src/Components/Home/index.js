import { useState, useEffect } from "react";
import { api } from "../../utils/api";

export function Home() {
  const [character, setCharacter] = useState([]);
  console.log(character);

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
            <b>{e.attributes.name}</b> <br />
          </>
        );
      })}
    </>
  );
}
