import { useParams } from "react-router";
import { api } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";

export function CharacterPage() {
  const [character, setCharacter] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  function handdleBack() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await api.get(`/characters/${params.characterId}`);
        setCharacter(response.data.data.attributes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCharacters();
  });

  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();

  return (
    <>
      <h1>{character.name}</h1>
      <span>
        <b>Descrição:</b> {character.description}
      </span>
      <br />
      <span>
        <b>Curiosidades:</b> {character.curiosity}
      </span>
      <br />
      <span>
        <b>Origem:</b> {character.origin}
      </span>
      <br />
      <span>
        <b>Idade:</b> {character.age} <b>Idade atual:</b>
        {anoAtual - character.age}
      </span>
      <br />
      <ReactPlayer url={character.videoURL} playing={true} />
      <button onClick={handdleBack}>Voltar</button>
    </>
  );
}
