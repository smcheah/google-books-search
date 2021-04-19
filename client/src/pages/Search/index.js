import "./style.css";
import axios from "axios";
import { useEffect, useState } from 'react';
import BookResults from "../../components/book-result";
import ContainerHeading from "../../components/container-heading";

const SearchPage = () => {

    const [searchValue, setSearchValue] = useState("");
    const [bookArray, setBookArray] = useState([]);

    useEffect(() => {
        bookData();
    }, [searchValue]);

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
    };

    const submitSearch = async (e) => {
        e.preventDefault();
        setSearchValue(e.target.previousSibling.value);

        bookData();
        displayResults();
    };

    const displayResults = () => {
        console.log("current bookArray", bookArray);
    };

    return (
        <div>
            <ContainerHeading heading="Book Search">
                <form>
                    <label htmlFor="bookQuery">Book:</label>
                    <input id="bookQuery" className="marg" type="text" placeholder="Harry Potter" onChange={ searchHandler } />
                    <button type="submit" accessKey="enter" onClick={ submitSearch } >Search</button>
                </form>
            </ContainerHeading>

            <ContainerHeading heading="Results">
                { bookArray ? <BookResults results={ bookArray } /> : null }
            </ContainerHeading>
        </div>
    );
};

export default SearchPage;