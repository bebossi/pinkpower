import { useState, useEffect } from "react";

export function Home() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
        try {
const response = await 
        } catch(err) {
            console.log(err)
        }
    }
    fetchCharacters()
  }, []);

  return <h1>Home</h1>;
}
