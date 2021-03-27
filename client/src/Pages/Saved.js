import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../utils/API"
import React, { useState, useEffect } from "react";


function SavedBooks() {
    const [saved, setSaved] = useState([])


    useEffect(() => {
        searchBooks()
    }, [])

    function searchBooks() {
        API.getBooks()
            .then(res => {


                setSaved(res.data)
                console.log(res.data)

            })
    }

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => {


                searchBooks()
                console.log(res.data)
            })
    }

    return (
        <div>
            {saved.map(book => {
                book = {
                    id: book.id,
                    title: book.title,
                    link: book.link,
                    description: book.description,
                    image: book.image,
                    author: book.author,
                    _id: book._id
                }

                return (

                    < ul >
                        <Container fluid="md">
                            <Row>
                                <Col ><h1>{book.title}</h1><br></br><h6>{book.author}</h6></Col>
                            </Row>
                            <Row>
                                <Col md={2} key={book.id}>  <img src={book.image} alt="bookImage" /></Col>
                                <Col><p>{book.description}</p></Col>
                            </Row>
                            <Row>
                                <Col ><a href={book.link}>Click here to learn more</a></Col>
                            </Row>
                            <Row> <Button className="delete" variant="outline-secondary" id={book.id} onClick={() => deleteBook(book._id)}>Delete</Button></Row>
                        </Container>
                    </ul>

                )
            })}
        </div>
    );
}

export default SavedBooks;
