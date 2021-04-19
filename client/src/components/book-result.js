import './style.css';
import bookArray from "../utils/book-array";

const BookResults = ({ bookArray }) => {
    console.log("book result ", bookArray);

    return (
        <section>
            {bookArray.map((book) => (
                <p>{ book.title }</p>
            )) }
        </section>
    );
};

export default BookResults;