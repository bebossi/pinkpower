import { useParams } from "react-router";
import { api } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";
import style from "./style.module.css";
import ImageWithStatusText from "../Loading";

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

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isCuriosityOpen, setIsCuriosityOpen] = useState(false);
  const [isOriginOpen, setIsOriginOpen] = useState(false);

  const handleDescriptionToggle = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const handleCuriosityToggle = () => {
    setIsCuriosityOpen(!isCuriosityOpen);
  };

  const handleOriginToggle = () => {
    setIsOriginOpen(!isOriginOpen);
  };

  return (
    <>
      <h1 className={style.title}>{character.name}</h1>

      <div className={style.gifDiv}>
        <ImageWithStatusText imageUrl={character.gifURL} />
      </div>

      <div className={style.oDiv}>
        <div className={style.iDiv}>
          <h2 className={style.topic} onClick={handleDescriptionToggle}>
            Descrição:
          </h2>
          <div
            className={`${style.content} ${
              isDescriptionOpen ? style.contentOpen : ""
            }`}
          >
            {character.description}
          </div>
        </div>
      </div>
      <br />
      <div className={style.oDiv}>
        <div className={style.iDiv}>
          <h2 className={style.topic} onClick={handleCuriosityToggle}>
            Curiosidades:
          </h2>
          <div
            className={`${style.content} ${
              isCuriosityOpen ? style.contentOpen : ""
            }`}
          >
            {character.curiosity}
          </div>
        </div>
      </div>
      <br />
      <div className={style.oDiv}>
        <div className={style.iDiv}>
          <h2 className={style.topic} onClick={handleOriginToggle}>
            Origem:
          </h2>{" "}
          <div
            className={`${style.content} ${
              isOriginOpen ? style.contentOpen : ""
            }`}
          >
            <p className={style.text}>
              {character.origin} <b className={style.bold}>Ano de criação:</b>{" "}
              {character.age} <b className={style.bold}>Idade atual:</b>{" "}
              {2023 - character.age}
            </p>
          </div>
        </div>
      </div>

      <br />
      <div className={style.oDiv}>
        <div className={style.movie}>
          <ReactPlayer url={character.videoURL} playing={true} />
        </div>
        <div className={style.btn}>
          <button onClick={handdleBack} className={style.button}>
            Voltar
          </button>
          <button onClick={handdleBack} className={style.buttonEdit}>
            Editar
          </button>
          <button onClick={handleDelete} className={style.buttonCancel}>
            Deletar
          </button>
        </div>
      </div>
    </>
  );
}
