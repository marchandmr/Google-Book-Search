
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import API from "../utils/API"
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function Search() {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        searchBook()
    }, [])

    function searchBook() {
        API.googleBooks(search)
            .then(res => {

                console.log(search)
                setBooks(res.data.items)
                console.log(books)
                console.log(res.data.items)
            })
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
                <h6>Book</h6>
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


            {/* {books.map(({ cell, email, login, location, name, picture }) => {

                return (

                    < ul >
                        <Container fluid="md">
                            <Row key={login.password}>
                                <Col key={login.password}>  <img src={picture.large} alt="employee" /></Col>
                                <Col > {name.first} {name.last}</Col>
                                <Col > {location.country}</Col>
                                <Col >{email}</Col>
                                <Col >{cell}</Col>
                            </Row>
                        </Container>
                    </ul>
                );
            })
            } */}

        </div >
    );
}


export default Search;


