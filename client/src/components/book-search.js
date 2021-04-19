import './style.css';
import axios from "axios";
import { useEffect, useState } from 'react';
// import bookArray from "../utils/book-array";
import BookResults from "./book-result";
import searchingBooks from "../utils/searching-books";

const BookSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const [bookArray, setBookArray] = useState([]);

    useEffect(() => {
        bookData();
    }, [bookArray]);

    const bookData = async () => {
        const tempArr = [];
        const URL = "https://www.googleapis.com/books/v1/volumes?q=";
        const response = await axios.get(URL + searchValue);

        for (let item of response.data.items) {
            tempArr.push(item.volumeInfo);
        }

        console.log("Book Status: " + response.status);
        setBookArray(tempArr);
    };

    const searchHandler = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value + " ");

        console.log("search being handled!");
        bookData();
    };

    const submitSearch = async (e) => {
        e.preventDefault();
        setSearchValue(e.target.previousSibling.value);
        searchingBooks(true, searchValue);

        bookData();
        displayResults();
    };

    const displayResults = () => {
        console.log("current bookArray", bookArray);

        if (bookArray.length > 0) {
            return <BookResults results={ bookArray } />;
        }
    };

    return (
        <div>
            <form>
                <label htmlFor="bookQuery">Book:</label>
                <input id="bookQuery" className="marg" type="text" placeholder="Harry Potter" onChange={ searchHandler } />
                <button type="submit" accessKey="enter" onClick={ submitSearch } >Search</button>
            </form>
        </div>
    );
};

export default BookSearch;