import style from "./style.module.css";
import { useState } from "react";


export function AboutUs() {

    const [isContainerOpen, setIsContainerOpen] = useState({
        formacao: false,
        inicioProjeto: false,
        desenvolvimento: false,
        objetivo: false
    })

    function handleContainerToggle(id){
        setIsContainerOpen(clickedId => ({...clickedId,[id]: !clickedId[id] }))
    }

  return (
    <section>
      <h1>About Us</h1>
      <div className={style.about}>
        <div className={style.container}>
          <h2 onClick={()=>  handleContainerToggle("formacao")} >Formação</h2>
          <p className={`${style.paragrafo} ${
            isContainerOpen.formacao ? style.paragrafoOpen: ""
          }`} >
            Estudantes da Ironhack Web Development full time, turma 94 jan - mar
            2023
          </p>
        </div>
        <div className={style.container}>
          <h2 onClick={()=>  handleContainerToggle("inicioProjeto")} >Inicio do Projeto</h2>
          <p className={`${style.paragrafo} ${
            isContainerOpen.inicioProjeto ? style.paragrafoOpen: ""
          }`} >
            A ideia surgiu do integrante Marco, uma vez que a câmera do Bernardo
            mudava para uma coloração rosa/roxa durante as aulas, de forma
            involuntária. Decidimos aplicar nossos conhecimentos de React,
            Javascript, criando uma aplicação com personagens de coloração rosa,
            por isso o nome Pink Power.
          </p>
        </div>
        <div className={style.container}>
          <h2 onClick={()=>  handleContainerToggle("desenvolvimento")} >Desenvolvimento</h2>
          <p className={`${style.paragrafo} ${
            isContainerOpen.desenvolvimento ? style.paragrafoOpen: ""
          }`} >
            O projeto foi desenvolvido em calls pela dupla, sempre debatendo
            sobre o andamento, sobre as mudanças e melhorias. Foi possível
            demonstrar habilidades em desenvolvimento web usando tecnologias como
            React, Git Hub, Strapi e Axios, e mostra como é possível criar uma
            aplicação completa usando essas ferramentas. Além disso, o tema
            "Personagens Rosas" trouxe um aspecto criativo e divertido ao
            projeto.
          </p>
        </div>
        <div className={style.container}>
          <h2 onClick={()=>  handleContainerToggle("objetivo")} >Objetivo</h2>
          <p className={`${style.paragrafo} ${
            isContainerOpen.objetivo ? style.paragrafoOpen: ""
          }`} >
            O objetivo principal do projeto foi criar um CRUD (Create, Read,
            Update, Delete) usando formulários em React e Axios. Para isso, a
            dupla criou uma API no Strapi e conectou-a ao render para criar uma
            base de dados. O CRUD permitiu que os usuários pudessem adicionar,
            visualizar, editar e excluir personagens rosas usando formulários em
            React. A base de dados foi criada a partir da conexão entre o render
            e a API no Strapi, permitindo que as informações fossem armazenadas
            de forma persistente.
          </p>
        </div>
      </div>
    </section>
  );
}
