import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"





function Search() {
    return (
        <Container>
            <h5>Book Search:</h5>
            <br></br>
            <h6>Book</h6>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search for a book"
                    aria-label="Search for a book"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </Container>
    );
}

export default Search;
