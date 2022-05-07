import React from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const MainDiv = styled.div`
    margin-top: 40px
`;

const Section = styled.p`
    font-weight: 500;
    font-size: 19px
`;

const SectionTitle = styled.div`
    display: flex;
    width: 50%;
    margin: auto;
    justify-content: space-between;
    margin-top: 80px
`;

const Btn = styled.div`
    width: 200px;
    margin: 0 10px;
    padding: 8px;
    background-color: black;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;

export default function HomePage() {

    const navigate = useNavigate()

    const handleClick = (prop) => {
        navigate(`/${prop}`)
    }

  return (
    <MainDiv>
        <Section>Book Section</Section>
        <SectionTitle>
            <Btn onClick={() => handleClick("mystery")}>Mystery</Btn>
            <Btn onClick={() => handleClick("technology")}>Technology</Btn>
            <Btn onClick={() => handleClick("mythology")}>Mythology</Btn>
            <Btn onClick={() => handleClick("history")}>history</Btn>
        </SectionTitle>
    </MainDiv>
  )
}
