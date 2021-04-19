import './style.css';
import { useState } from 'react';

const BookResults = ({ results }) => {

    const [clicked, setClicked] = useState(false);

    const extendDesc = (e) => {
        console.log("show more:", e);
        setClicked(true);
    };

    if (results) {
        console.log(results);
        return (
            <ul className="book-list">
                {results.map((book) => (
                    <li key={ book.infoLink }>
                        <p>{ book.title }</p>
                        <p>
                            {
                                book.authors ?
                                    book.authors[0] ? book.authors[0] :
                                        book.authors[1] ? book.authors[1] : null
                                    : null
                            }
                        </p>
                        {
                            book.imageLinks ?
                                book.imageLinks.thumbnail ? <img src={ book.imageLinks.thumbnail } alt="Book-cover thumbnail" /> :
                                    book.imageLinks.smallThumbnail ? <img src={ book.imageLinks.thumbnail } alt="Book-cover thumbnail" /> : null
                                : <img src="http:/placehold.it/100x150" alt="Book-cover thumbnail" />
                        }
                        <p>
                            {
                                book.description ?
                                    book.description.length > 599 ?
                                        (
                                            clicked ? book.description :
                                                <>
                                                    { book.description.substring(0, 600) }
                                                    <a onClick={ extendDesc }> ...show more</a>
                                                </>
                                        ) : book.description
                                    : null
                            }
                        </p>
                        <p>{ book.infoLink ? <a href={ book.infoLink } target="_blank">More Information</a> : null }</p>
                    </li>
                )) }
            </ul>
        );
    } else {
        return null;
    }

};

export default BookResults;