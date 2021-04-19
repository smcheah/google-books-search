import bookArray from "./book-array";
import BookResults from "../components/book-result";

const SearchClicked = (clicked, searchTerm) => {
    // if search button is clicked, 
    // load icon appears
    // clear results
    // then display results

    if (clicked) {
        console.log(`search was clicked! searching "${searchTerm}"`);
    }

    return { clicked, searchTerm };

};

export default SearchClicked;