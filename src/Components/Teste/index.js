import { api } from "../../utils/api";
import React from "react";
import { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

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

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <h1>Testando</h1>
      {character.map((e) => {
        return <YouTube videoId={e.attributes.videoURL} opts={opts} />;
      })}
    </>
  );
}
