import React from 'react'
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';

const MainDiv = styled.div`
    width: 30%;
    margin: auto;
    padding: 20px;
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Image = styled.img`
    height: 300px;
    margin: auto;
`;

const Title = styled.p`
    font-size: 19px;
    margin: 5px 0;
    font-weight: 500;
`;

const Author = styled.p`
    margin: 5px 0;
    color: grey;
    font-size: 12px
`;

const Price = styled.p`
    margin: 5px 0;
`;

const Description = styled.p`
    width: 50%
    margin: auto;
    font-size: 13px
`;

const ISBN = styled.p`
    font-size: 11px;
    font-weight: 500;
`;

const Reviews = styled.div`
    width: 50%;
    margin: auto;
    margin-top: 40px;
    border-top: 1px solid black;
    padding-top: 30px
`;

const Rheader = styled.div`
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 30px;
`;

const Review = styled.div`
    font-size: 13px;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 10px;
`;

export default function BookDetails() {

    const params = useParams()
    const { books } = useSelector(store => store)
    const [book, setBook] = useState({})

    useEffect(() => {
        let IndividualBook = books.filter((item) => item.id == params.id)
        setBook(IndividualBook[0])
    }, [books])

  return (
    <>
        <MainDiv>
            <Image src={book.image} />
            <Title>{book.title}</Title>
            <Author>{`written by : ${book.title}`}</Author>
            <Price>{`Price : ₹ ${book.price}`}</Price>
            <Description>{`Description : ${book.description}`}</Description>
            <ISBN>{`ISBN Number : ${book.isbn}`}</ISBN>
        </MainDiv>
    </>
  )
}
