import { useParams } from "react-router";
import { api } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";
import style from "./style.module.css";

export function CharacterPage() {
  const [character, setCharacter] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  function handdleBack() {
    navigate("/");
  }

  async function handleDelete() {
    try {
      const response = await api.delete(`/characters/${params.characterId}`);
      console.log(response);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
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

  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleContentToggle = () => {
    setIsContentOpen(!isContentOpen);
  };

  return (
    <>
      <h1 className={style.title}>{character.name}</h1>

      <div className={style.gifDiv}>
        <img
          src={character.gifURL}
          alt="GIF do personagem"
          className={style.gif}
        />
      </div>

      <div className={style.oDiv}>
        <div className={style.iDiv}>
          <h2 className={style.topic} onClick={handleContentToggle}>
            Descrição:
          </h2>
          <div
            className={`${style.content} ${
              isContentOpen ? style.contentOpen : ""
            }`}
          >
            {character.description}
          </div>
        </div>
      </div>
      <br />
      <div className={style.oDiv}>
        <div className={style.iDiv}>
          <h2 className={style.topic} onClick={handleContentToggle}>
            Curiosidades:
          </h2>
          <div
            className={`${style.content} ${
              isContentOpen ? style.contentOpen : ""
            }`}
          >
            {character.curiosity}
          </div>
        </div>
      </div>
      <br />
      <div className={style.oDiv}>
        <div className={style.iDiv}>
          <h2 className={style.topic} onClick={handleContentToggle}>
            Origem:
          </h2>{" "}
          <div
            className={`${style.content} ${
              isContentOpen ? style.contentOpen : ""
            }`}
          >
            {character.origin} <b className={style.bold}>Ano de criação:</b>{" "}
            {character.age} <b className={style.bold}>Idade atual:</b>{" "}
            {2023 - character.age}
          </div>
        </div>
      </div>

      <br />
      <div className={style.oDiv}>
        <div className={style.movie}>
          <ReactPlayer url={character.videoURL} playing={true} />
        </div>
        <button onClick={handdleBack}>Voltar</button>
        <button onClick={handleDelete}>Deletar</button>
      </div>
    </>
  );
}
