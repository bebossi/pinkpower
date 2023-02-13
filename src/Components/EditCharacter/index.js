import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";

export function EditCharacter(){
    const navigate = useNavigate();
    const params = useParams();

    const [character, setCharacter] = useState({
        name: "",
        origin: "",
        age: 0,
        imageURL: "",
        videoURL: "",
        description: "",
        curiosity: "",
    })

    useEffect(() => {
        async function fetchCharacter(){
            try{

                const response = await api.get(`/characters/${params.characterId}`)
                setCharacter(response.data.data.attributes)
            }catch(err){
                console.log(err)
            }
        }
        fetchCharacter();
    }, [])

     function handleChange(e) {
        setCharacter({...character, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        try{
            e.preventDefault();

            const infosForAPI = {data: {...character}};
    
            await api.put(`/characters/${params.characterId}`, infosForAPI);

            navigate("/");
        } catch(err){
            console.log(err);
        }
    }

    return (
        <>
        <h1>Editar personagem</h1>

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

            <button>Editar</button>
        </form>
        </>
    )
}