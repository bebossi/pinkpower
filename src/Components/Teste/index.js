import { api } from "../../utils/api";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Teste() {
  const [character, setCharacter] = useState([]);
  console.log(character);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await api.get(`/characters`);
        setCharacter(response.data.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <>
      <h1>Pink Power</h1>
      <div>
        {character.map((e) => {
          return (
            <div>
              <Link to={`/characters/${e.id}`}>
                <img src={e.attributes.imageURL} alt="Foto do personagem" />
                <div>
                  <div>{e.attributes.name}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
