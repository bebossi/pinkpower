import { api } from "../../utils/api";
import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

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
      <h1>Testando</h1>
      {character.map((e) => {
        return <ReactPlayer url={e.attributes.videoURL} playing="true" />;
      })}
    </>
  );
}
