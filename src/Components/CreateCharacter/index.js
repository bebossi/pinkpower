import { useState } from "react";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export function CreateCharacter(){
    const navigate = useNavigate();

    const [character, setCharacter] = useState({
        name: "",
        origin: "",
        age: 0,
        imageURL: "",
        videoURL: "",
        description: "",
        curiosity: "",
        gifURL: ""
    })

     function handleChange(e) {
        setCharacter({...character, [e.target.name]: e.target.value});
    }


    async function handleSubmit(e) {
        try{
            e.preventDefault();

            const infosForAPI = {data: {...character}};
    
            await api.post("/characters", infosForAPI);

            navigate("/")
        } catch(err){
            console.log(err);
        }
    }


    return (
        <>
        <h1>Criar novo personagem</h1>

        <form onSubmit={handleSubmit} >
            <label htmlFor="name" >Nome:</label>
            <input id="name" name="name" value={character.name} onChange={handleChange} />

            <label htmlFor="origin" >Origem:</label>
            <input id="origin" name="origin" value={character.origin} onChange={handleChange} />

            <label htmlFor="age" >Idade:</label>
            <input id="age"  type="number" name="age" value={character.age} onChange={handleChange} />

            <label htmlFor="imageURL"  >Imagem URL:</label>
            <input id="imageURL" name="imageURL" value={character.imageURL} onChange={handleChange} />

            <label htmlFor="videoURL"  >Video URL:</label>
            <input id="videoURL" name="videoURL" value={character.videoURL} onChange={handleChange} />

            <label htmlFor="description"  >Descrição:</label>
            <input id="description"  name="description" value={character.description} onChange={handleChange} />

            <label htmlFor="curiosity"  >Curiosidades:</label>
            <input id="curiosity" name="curiosity" value={character.curiosity} onChange={handleChange} />

            <label htmlFor="gifURL"  >Curiosidades:</label>
            <input id="gifURL" name="gifURL" value={character.gifURL} onChange={handleChange} />

            <button>Criar Personagem </button>
        </form>
        </>
    )
}