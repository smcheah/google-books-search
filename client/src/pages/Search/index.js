import "./style.css";
import HeroHeader from "../../components/hero-header";
import BookSearch from "../../components/book-search";
import BookResults from "../../components/book-result";
import bookArray from "../../utils/book-array";
import ContainerHeading from "../../components/container-heading";

const SearchPage = () => {


    return (
        <div>
            <HeroHeader>
                <h1>Google Books Search</h1>
                <h2>Search for and save books of interest</h2>
            </HeroHeader>

            <ContainerHeading heading="Book Search">
                <BookSearch />
            </ContainerHeading>

            {/* if any results, display this section */ }
            <ContainerHeading heading="Results">

            </ContainerHeading>
        </div>
    );
};

export default SearchPage;