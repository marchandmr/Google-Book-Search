
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import API from "../utils/API"
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "./search.css"

function Search() {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        searchBook()
    }, [])

    function searchBook() {
        API.googleBooks(search)
            .then(res => {


                setBooks(res.data.items)
            })
    }

    function saveBook(bookInfo) {

        API.saveBook({

            id: bookInfo.id,
            image: bookInfo.img,
            title: bookInfo.title,
            author: bookInfo.author,
            link: bookInfo.link,
            description: bookInfo.description
        }

        )
            .catch(err => console.log(err));
        console.log(bookInfo.title)
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        searchBook();
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch(value)
    };





    return (

        < div >
            <Container>
                <h5>Book Search:</h5>
                <br></br>

                <InputGroup className="mb-3">
                    <FormControl value={search}
                        onChange={handleInputChange}
                        placeholder="Search for a book"
                        aria-label="Search for a book"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={handleFormSubmit}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
            <br></br>
            {books.map(book => {
                book = {
                    id: book.id,
                    title: book.volumeInfo.title,
                    link: book.volumeInfo.infoLink,
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    author: book.volumeInfo.authors
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
                            <Row> <Button className="save" variant="outline-secondary" onClick={event => saveBook(book)}>Save</Button></Row>
                        </Container>
                    </ul>

                )
            })}
        </div >
    );
}


export default Search;


