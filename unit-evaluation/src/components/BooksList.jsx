import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setBooks } from '../redux/action'
import { useNavigate } from "react-router-dom"

const MainDiv = styled.div`
    display: flex;
    width: 70%;
    margin: auto;
    justify-content: space-between;
    margin-top: 80px
`;

const BookDiv = styled.div`
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 10px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
`;

const Title = styled.p`
    margin: 5px 0;
    font-weight: 500;
`;

export default function BooksList() {

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { books } = useSelector(store => store)
    const [booksList, setBooksList] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:8080/${params.search}`)
        .then(res => res.json())
        .then(data => dispatch(setBooks(data)))
    }, [params])

    useEffect(() => {
        setBooksList(books)
    }, [books])

    const handleBookClick = (id) => {
        navigate(`/${params.search}/${id}`)
    }

  return (
    <>
        {booksList ? (
            <MainDiv>
                {booksList.map((item) => {
                    return (
                        <BookDiv key={item.id} onClick={() => handleBookClick(item.id)}>
                            <Image src={item.image} alt="" />
                            <Title>{item.title}</Title>
                        </BookDiv>
                    )
                })}
            </MainDiv>
        ) : <div>Error...</div>}
    </>
  )
}
